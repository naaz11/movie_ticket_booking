import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SeetService } from '../seet.service';
@Component({
  selector: 'app-create-seat',
  templateUrl: './create-seat.component.html',
  styleUrls: ['./create-seat.component.css'],
})
export class CreateSeatComponent implements OnInit {
  seatForm: UntypedFormGroup;
  errorMessage: string;

  constructor(
    private fb: UntypedFormBuilder,
    private stService: SeetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.seatForm = this.fb.group({
      seatNumber: [''],
      type: [''],
      price: [''],
      status: [''],
    });
  }
  addASeat() {
    this.stService.addSeat(this.seatForm.value).subscribe(
      (res: any) => {
        this.router.navigate(['/seat']);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}
