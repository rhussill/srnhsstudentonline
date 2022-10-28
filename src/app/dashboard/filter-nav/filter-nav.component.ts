import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-nav',
  templateUrl: './filter-nav.component.html',
  styleUrls: ['./filter-nav.component.css']
})
export class FilterNavComponent implements OnInit {

  dataclassTypes=[
    'None',
    '.fastq',
    '.bam',
    '.bai'
  ];

  specimenTypes=[
    'None',
    'Blood',
    'Urine',
    'Saliva',
    'Buccal',
    'Nasal'
  ];

  cancerTypes = [
    'None',
    'ACC',
    'BLCA',
    'BRCA',
    'CESC',
    'CHOL',
    'COAD',
    'DLBC',
    'ESCA',
    'GBM',
    'HNSC',
    'KICH',
    'KIRC',
    'KIRP',
    'LAML',
    'LGG',
    'LIHC',
    'LUAD',
    'LUSC',
    'MESO',
    'OV',
    'PAAD',
    'PCPG',
    'PRAD',
    'READ',
    'SARC',
    'SKCM',
    'STAD',
    'TGCT',
    'THCA',
    'THYM',
    'UCEC',
    'UCS',
    'UVM',
  ];

  sequenceTypes = [
    'None',
    'WGS',
    'WXS'
];

  @Output() menuClickedEvent = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }


  menuClicked(){
    this.menuClickedEvent.emit();
  }

  print(item:any){
    item.opened = true;
    console.log(item);
  }

  prints(items:any){
    items.opened = true;
    console.log(items);
  }

  filterclick(){

    this.menuClickedEvent.emit();
    
  }
}
