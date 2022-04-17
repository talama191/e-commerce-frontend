import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Voucher } from 'src/app/models/voucher'
import { HttpServerService } from 'src/app/services/http-server.service';
import { VoucherService } from 'src/app/services/voucher.service';
@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {
  vouchers: Voucher[]
  constructor(private route: ActivatedRoute, private httpServer: HttpServerService,private voucherService:VoucherService) { }

  ngOnInit(): void {
    this.voucherService.getVoucherList().subscribe(data =>{
      console.log(data);
      
      this.vouchers = data
  })
  }
  editVoucher(id: number) {

  }
  deleteVoucher(id: number) {

  }
}
