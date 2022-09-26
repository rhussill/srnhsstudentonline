import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit {
 
  addval:boolean=false;

  capturekit:any;
  sequenceType:any;
  cancertype:any;
  specimentypes:any;
  dataclasses:any;
  

  dataclassTypes=[
    'None',
    '.fastq',
    '.bam',
    '.bai'
  ]

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

  captureKits = [
    'None',
   'Agilent Sure Select Human All Exon v1 kits',
    'Agilent SureSelect All Exon v2',
    'Agilent SureSelect Human All Exon v2',
    'Agilent Sure-Select Human All Exon v2.0',
    'Agilent SureSelect Human All Exon V6 Kit',
    'Agilent SureSelect XT LowInput kit',
    'Agilent SureSelectXT Clinical Research Exome\xa0v2\xa0capture library',
    'Agilent SureSelectXT Clinical Research Exomev2capture library',
    'Agilent v7',
    'Agilent v8',
    'Custom V2 Exome Bait, 48 RXN X 16 tubes',
    'Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes',
    'Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes',
    'Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes',
    'Gapfiller_7m',
    'hg18 nimblegen exome version 2',
    'hg18 nimblegen exome version 2|SureSelect Human All Exon 38 Mb v2',
    'Human All Exon v7',
    'Nimblegen EZ Exome v3.0',
    'Nimblegen EZ Exome v3.0|120613_HG19_EC_HPV_39235 capture oligo tube|Nimblegen SeqCap EZ Human Exome Library v2.0',
    'Nimblegen EZ Exome v3.0|HPV_IDT_probes capture chip set',
    'Nimblegen EZ Exome v3.0|WO2791991 pooled probes|WO2768646 pooled probes|WO2793950 pooled probes|WO2790654 pooled probes',
    'Nimblegen SeqCap EZ Human Exome Library v2.0',
    'Nimblegen SeqCap EZ Human Exome Library v2.0|hg18 nimblegen exome version 2',
    'Nimblegen SeqCap EZ Human Exome Library v2.0|Nimblegen EZ Exome v3.0|120613_HG19_EC_HPV_39235 capture oligo tube',
    'Nimblegen SeqCap EZ Human Exome Library v3.0',
    'NimbleGen Sequence Capture 2.1M Human Exome Array',
    'NimbleGen Sequence Capture 2.1M Human Exome Array|SureSelect Human All Exon 38 Mb v2',
    'NimbleGen Sequence Capture 2.1M Human Exome Array|SureSelect Human All Exon 50Mb Kit',
    'NimbleGen_SeqCap_EZ_Exome_v3a',
    'NimbleGen_SeqCap_EZ_Exome_v3b',
    'SeqCap EZ Exome V2.0',
    'SeqCap EZ HGSC VCRome',
    'SureSelect All Exon V5 Kit',
    'SureSelect Human All Exon',
    'SureSelect Human All Exon 38 Mb v2|hg18 nimblegen exome version 2',
    'SureSelect Human All Exon 50Mb Kit|NimbleGen Sequence Capture 2.1M Human Exome Array',
    'SureSelect Human All Exon 51MB V3 (JHH samples) or V4 (all other samples) kits (Agilent)',
    'SureSelect Human All Exon V6 probe',
    'SureSelect Human All ExonV6 COSMIC Kit (Agilent Technologies)',
    'SureSelect XT Human All Exon V5',
    'SureSelectXT Human All Exon V5, 16',
    'SureSelectXT Human All ExonV6Capture Library (Agilent, 5190-8865)',
    'VCRome V2.1',
   ' VCRome V2.1-PKv1',
    'WO2791991 pooled probes|WO2768646 pooled probes|WO2793950 pooled probes|WO2790654 pooled probes|Nimblegen EZ Exome v3.0',
    'Unknown',
  ];
  sequenceTypes = [
      'None',
      'WGS',
      'WXS'
  ];
 

  constructor( private dialogref: MatDialogRef<FilterFormComponent>) { }

  ngOnInit(): void {
  }

  close(){
   this.dialogref.close()
  }

  addvalue(){
   
    console.log("open")
    var sequencetypeID = document.getElementById('sequencetypeID'),
        inputValue = ( <HTMLInputElement> document.getElementById('val')).value,
        newOption = document.createElement('option'),
        newOptionValue = document.createTextNode(inputValue);

        newOption.appendChild(newOptionValue);
        sequencetypeID.insertBefore(newOption ,sequencetypeID.lastChild);

  }

}
