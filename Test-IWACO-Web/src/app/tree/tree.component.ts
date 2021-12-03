// import { Component, OnInit } from '@angular/core';
// import { Injectable} from '@angular/core';
// import {MatTreeNestedDataSource} from '@angular/material/tree';
// import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';
// import {NestedTreeControl} from '@angular/cdk/tree';


// @Component({
//   selector: 'app-tree',
//   templateUrl: './tree.component.html',
//   styleUrls: ['./tree.component.css']
// })
// export class FileNode {
//   children: any;
//   filename: any;
//   type: any;
// }
// export class TreeComponent  {

//   // constructor() { }

//   // ngOnInit(): void {
//   // }
//   nestedTreeControl: NestedTreeControl<FileNode>;
//   nestedDataSource: MatTreeNestedDataSource<FileNode>;
//   dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

//   constructor() {
//     this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
//     this.nestedDataSource = new MatTreeNestedDataSource();

//     this.dataChange.subscribe(data => this.nestedDataSource.data = data);

//     this.dataChange.next([
//       {
//         filename: "folder",
//         type: "",
//         children: [
//           {
//             filename: "test3",
//             type: "exe",
//             children: [],
//           }
//         ],
//       },
//       {
//         filename: "test2",
//         type: "exe",
//         children: [],
//       },
//     ]);
//   }

//   private _getChildren = (node: FileNode) => { return observableOf(node.children); };
  
//   hasNestedChild = (_: number, nodeData: FileNode) => {return !(nodeData.type); };

// }

import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {BehaviorSubject, Observable, of as observableOf} from 'rxjs';

export class FileNode {
  children: FileNode[] = [];
  filename: any;
  type: any;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
 
})
export class TreeComponent {
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  dataChange: BehaviorSubject<FileNode[]> = new BehaviorSubject<FileNode[]>([]);

  constructor() {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    this.dataChange.subscribe(data => this.nestedDataSource.data = data);

    this.dataChange.next([
      {
        filename: "folder",
        type: "",
        children: [
          {
            filename: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
            type: "exe",
            children: [],
          }
        ],
      },
      {
        filename: "Commitment",
        type: "",
        children: [
          {
            filename: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
            type: "exe",
            children: [],
          },
        ],
      },
      {
        filename: "Exellencee",
        type: "",
        children: [ {
          filename: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
          type: "exe",
          children: [],
        },],
      },
      {
        filename: "Loyalty",
        type: "",
        children: [ {
          filename: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
          type: "exe",
          children: [],
        },],
      },
      {
        filename: "Solidarity",
        type: "",
        children: [ {
          filename: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.",
          type: "exe",
          children: [],
        },],
      },
    ]);
  }

  private _getChildren = (node: FileNode) => { return observableOf(node.children); };
  
  hasNestedChild = (_: number, nodeData: FileNode) => {return !(nodeData.type); };
}
