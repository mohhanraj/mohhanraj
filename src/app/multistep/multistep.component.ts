import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
// import { orderDetails } from './data';
import { EditSettingsModel, ToolbarItems,SaveEventArgs,IEditCell} from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-multistep',
  templateUrl: './multistep.component.html',
  styleUrls: ['./multistep.component.css']
})
export class MultistepComponent implements OnInit {

  personalDetails!: FormGroup;
  coPassengers!: FormGroup;
  touristPlace!: FormGroup;
  personal_step = false;
  coPassengers_step = false;
  touristPlace_step = false;
  step = 1;
  noOfPersons = [1,2,3,4,5,6,7,8,9,10];

  public tourist_place='';
  public places = ['Ooty','Manali','Dehradun','Wayanad'];
  public tourist_place_image='';

  // public data: object[];
  public passengers_data:any=[];
  // public pageSettings: PageSettingsModel;
  public editOptions: EditSettingsModel = {allowAdding:true,allowEditing:true,allowDeleting:true,mode:'Normal'};
  public toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  public ggParams: IEditCell = { params:{ value:'male'}};
  public Name='';
  public Age='';
  public Gender='';
  public Adhar='';
  // public editparams: Object;
  // public data1;
  


  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
        this.personalDetails = this.formBuilder.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            persons: ['',Validators.required],
            adharCard: ['',Validators.required]
        });
        this.coPassengers = this.formBuilder.group({
            city: ['', Validators.required],
            address: ['', Validators.required],
            pincode: ['',Validators.required]
        });
        this.touristPlace = this.formBuilder.group({
          tourist_pl: ['', Validators.required]
        });


  }
  get personal() { return this.personalDetails.controls; }
  get tourist() { return this.touristPlace.controls; }
  // get address() { return this.addressDetails.controls; }
  next(){
    
    if(this.step==1){
          this.personal_step = true;
          if (this.personalDetails.invalid) { return  }
          this.step++
    }
    if(this.step==2){
      console.log(this.personalDetails.value.persons);
        this.coPassengers_step = true;
        // alert(this.passengers_data.length);
          if (this.passengers_data.length != this.personalDetails.value.persons) {
             return 
            }
            this.step++;
    }
  }
  previous(){
    this.step--
    if(this.step==1){
      this.personal_step = false;
    }
    if(this.step==2){
      this.touristPlace_step = false;
    }
  }
  submit(){
    if(this.step==3){
      this.touristPlace_step = true;
      if (this.touristPlace.invalid) { return }
      this.step++;
    }

   this.passengers_data.forEach(function (value:any) {
      console.log(value);
    }); 

  }


  // passenger()
  // {
  //   console.log(this.Name);
  // }

  gridAB(args: SaveEventArgs) {
    // alert("sdfas");
    // console.log(args);
    // if (args.requestType === 'beginEdit' || args.requestType === 'add') {
    //   // console.log(args.rowData);
    //     // this.data = Object.assign({}, args.rowData);
    // }
    if(args.requestType === 'save')
    {
      console.log(args.data);
      this.passengers_data.push(args.data);
      console.log(this.passengers_data);
    }
    if(args.requestType === 'delete')
    {
      // console.log(args.data);
      // this.passengers_data = this.passengers_data.filter(item => item !== args.data);
      // const index: number = this.passengers_data.indexOf(args.data);
      // console.log(this.passengers_data);
      // this.passengers_data.splice(index, 1);
      // console.log(this.passengers_data);
    }
}


public showImage(image : string)
{
  this.tourist_place_image=';'
  this.tourist_place_image = image;
}

}
