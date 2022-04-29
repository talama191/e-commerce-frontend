import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { VoucherService } from 'src/app/services/voucher.service'
@Component({
  selector: 'app-add-voucher',
  templateUrl: './add-voucher.component.html',
  styleUrls: ['./add-voucher.component.css']
})
export class AddVoucherComponent implements OnInit {
  constructor(private voucherService: VoucherService) { }

  ngOnInit(): void {
  }
  addCategory(form: NgForm) {
    
    this.voucherService.addVoucher(form).subscribe({
      next: (response) => alert('success')
      ,
      error: (error) => console.log(error)
      ,
    });
  }
}
