import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppService } from 'src/app/app.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-nav',
  templateUrl: './filter-nav.component.html',
  styleUrls: ['./filter-nav.component.css'],
  providers: [DatePipe]
})
export class FilterNavComponent implements OnInit {

  datasource:any;
  total:any;
  page= '1'

  pipe = new DatePipe('en-US');

  filter:any;
  PageNo = 1;

  sampleid:any;
  CaptureKit:any;
  Regex:any;
  TimeStampA:any;
  TimeStampB:any;
  DataType:any;
  SpecimenType:any;
  CancerType:any;
  SequenceType:any;
  Site:any;


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

  @Output() menuClickedEvent = new EventEmitter<any>();
  constructor(private service : AppService ) { }

  ngOnInit(): void {
  }


  menuClicked(){

    this.getAllUploads();
    this.menuClickedEvent.emit();
    
  }

  getAllUploads() {
 
    this.service.getallUpload(this.page).subscribe(data => {
      console.log("seeedataaaaaaaaaaa",data[0].files)
      console.log("hey",data)
      this.service.filterdata = data[0].files
      this.service.dataService = data[0].files
      this.datasource = data[0].files
      this.total = data[0].count
      console.log("totallllll",this.total)
    })
  }

  print(item:any){
    item.opened = true;
    console.log(item);
  }

  prints(items:any){
    items.opened = true;
    console.log(items);
  }


  submit(form:any){

    let date1 = this.pipe.transform(form.TimeStampA, 'yyyy-MM-dd'); //date format
    let date2 = this.pipe.transform(form.TimeStampB, 'yyyy-MM-dd'); //date format

    form.TimeStampA= date1;
    form.TimeStampB=date2;

    this.service.searchFilter(form,this.PageNo).subscribe(data=> {
      this.service.filterdata = data;
       console.log(this.service.filterdata)
       this.menuClickedEvent.emit(this.service.filterdata)
    })
    
    
    
    // form = form.value.trim().toLowerCase()
    console.log(form)
  

  }
}
