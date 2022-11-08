import { SelectionModel } from '@angular/cdk/collections';
import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';


import { faJava, faJsSquare, faPhp, faPython, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { ArticleEntry, BlogService } from 'src/app/services/blog.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-blind-leetcode',
  templateUrl: './blind-leetcode.component.html',
  styleUrls: ['./blind-leetcode.component.scss']
})
export class BlindLeetcodeComponent implements OnInit, AfterContentInit {
  @ViewChild('input') theInput: HTMLElement;

  showToDo = false;
  localStorageBlock = [];

  selection = new SelectionModel<ArticleEntry>(true, []);

  displayedColumns: string[] = ['no', 'select', 'title', 'topic', 'video', 'article', 'solution'];
  dataSource;

  private articles = [];
  private faIcons = {
    youtube: faYoutube,
    book: faBook,
    java: faJava,
    js: faJsSquare,
    php: faPhp,
    py: faPython
  };

  constructor(
    private local: LocalStorageService,
    private service: BlogService
  ) {
  }

  ngOnInit(): void {
    const caca = this.service.getBlindLeetcodeList();
    this.articles = caca;
    this.dataSource = new MatTableDataSource<ArticleEntry>(this.articles);

    this.dataSource.filterPredicate = (data: ArticleEntry, filter: string) => {
      const includeAll = [];
      if (this.showToDo) {
        includeAll.push(false);
      } else {
        includeAll.push(true, false);
      }

      return includeAll.includes(data.done) && data.title.toLowerCase().indexOf(filter) !== -1;
    };

    this.localStorageBlock = new Array(76).fill(0);
  }

  ngAfterContentInit(): void {
    const doneList = this.local.getData('blind-leetcode-done');
    if (doneList && this.dataSource.filteredData.length) {
      const secondDoneList = JSON.parse(doneList);

      for (let i = 0; i < secondDoneList.length; i++) {
        if (secondDoneList[i]) {
          this.dataSource.filteredData[i].done = true;
        }
      }

      this.localStorageBlock = JSON.parse(doneList);
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  public checkboxLabel(event: PointerEvent, row: any): string {
    this.serializeObject(!event.target['firstChild'].checked, row);
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.no + 1}`;
  }

  public applyFilter(event: Event) {
    // TODO: doing this, just because we cannot run filterPredicate when filter string
    // is empty. Please find another way, this is not ideal
    this.dataSource.data = this.articles;
    let filterValue;
    if (typeof event === 'object' && event.target) {
      filterValue = (event.target as HTMLInputElement).value;
    } else {
      filterValue = this.theInput['nativeElement'].value;
    }

    // filterPredicate not running, handle special case
    if (!filterValue && this.showToDo) {
      this.dataSource.data = this.articles.filter((element: ArticleEntry) => {
        return !element.done;
      });
    }

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private serializeObject(isChecked: boolean, theRow: ArticleEntry): any {
    const idx = theRow.no - 1;

    if (isChecked) {
      this.localStorageBlock[idx] = 1;
    } else {
      this.localStorageBlock[idx] = 0;
    }
    const toBeSaved = JSON.stringify(this.localStorageBlock);

    this.local.saveData('blind-leetcode-done', toBeSaved);
  }
}
