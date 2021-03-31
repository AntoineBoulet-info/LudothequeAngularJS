import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';

declare var solver: any;

@Component({
  selector: 'app-lp-solver-test',
  templateUrl: './lp-solver-test.component.html',
  styleUrls: ['./lp-solver-test.component.css']
})
export class LpSolverTestComponent implements OnInit {


  readonly probleme = {
    variables: {
      s1: {
        p1: 5,
        p2: 8,
        p3: 5,
        benefice: 4.2
      },
      s2: {
        p1: 7,
        p2: 3,
        p3: 8,
        benefice: 5.1
      }
    },
    ints: {s1: 1, s2: 1},
    binaries: {},
    constraints: {
      p1: {max: 200},
      p2: {max: 250},
      p3: {max: 220}
    },
    opType: 'max',
    optimize: 'benefice'
  };

  readonly sacAdoc = {
    variables: {
      o1: {
        poids: 12,
        prix: 10
      },
      o2: {
        poids: 11,
        prix: 10
      },
      o3: {
        poids: 7,
        prix: 15
      },
      o4: {
        poids: 25,
        prix: 32
      },
      o5: {
        poids: 10,
        prix: 7
      },
      o6: {
        poids: 5,
        prix: 7
      }

    },
    ints: {},
    binaries: {o1: 1, o2: 1, o3: 1, o4: 1, o5: 1, o6: 1},
    constraints: {
      poids: {max: 40}
    },
    opType: 'max',
    optimize: 'prix'
  };
  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  resolutionProbleme(): void {
    const resultat = solver.Solve(this.probleme);
    console.log(resultat);
    const nbS1 = resultat.s1;
    const nbS2 = resultat.s2;
    const beneficeTotal = resultat.result;
    const affiche = `Solution : Sachets S1 :  ${nbS1}, Sachets S2 : ${nbS2}, Bénéfice : ${beneficeTotal}`;
    this.messageService.add({
      key: 'main',
      severity: 'info',
      detail: `${affiche}`,
    });
  }

  // tslint:disable-next-line:typedef
  resolutionSacADos(){
    const resultat = solver.Solve(this.sacAdoc);
    console.log(resultat);
    const boolO1 = resultat.o1;
    const boolO2 = resultat.o2;
    const boolO3 = resultat.o3;
    const boolO4 = resultat.o4;
    const boolO5 = resultat.o5;
    const boolO6 = resultat.o6;
    let affiche = `Solution : `;
    if (boolO1){
      affiche += ` O1 : ${boolO1}`;
    }
    if (boolO2){
      affiche += ` O2 : ${boolO2}`;
    }
    if (boolO3){
      affiche += ` O3 : ${boolO3}`;
    }
    if (boolO4){
      affiche += ` O4 : ${boolO4}`;
    }
    if (boolO5){
      affiche += ` O5 : ${boolO5}`;
    }
    if (boolO6){
      affiche += ` O6 : ${boolO6}`;
    }
    this.messageService.add({
      key: 'main',
      severity: 'info',
      detail: `${affiche}`,
    });
  }

}



