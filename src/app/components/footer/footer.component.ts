import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/components/service/sweet-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email: string = ''

  constructor(private alertService: AlertService) { }

  ngOnInit(): void {

  }

  sendEmail() {
    if (this.email) {
      this.alertService.success('E-mail cadastrado com sucesso!', 'Confirmado!');
      console.log(this.email)
    } else {
      this.alertService.error('E-mail inválido!', 'Erro!');
      console.log(this.email)
    }

  }

}
