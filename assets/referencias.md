# nested pros enderecos e telefones
https://stackblitz.com/edit/angular-nested-mat-table?file=app%2Ftable-expandable-rows-example.ts



# endereços embedados no usuario, schema no mongoose
var enderecoSchema = new Schema({
endereco : {[
    { logradouro: { 
        enum: [ "Rua", "Avenida", "Alameda", "Chácara", "Estrada", "Parque", null ],
        description: "apenas os dados do enum"
    }
    numero:{type:number},
    bairro:{},
    complemento:{},
    CEP:{},
    cidade:{type: string},
    estado:{},
    },
 ]}
})

 ## exemplo no schema direto
 enderecos:{ 
    type: Array,
    itens:{
          logradouro: String,
          numero: Number,
          bairro: String,
          complemento: String,
          cep: String,
          cidade: String,
          estado: String
          }
 },
 telefones:{ 
    type: Array,
    itens:{
          numero: String,
          tipo: String
          }
 },



## colas regex e validadores
$phone = '(11)99999-9999'; isValid = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/.test($phone)

// exemplo array embeded
{
    name: 'Kate Monster',
    ssn: '123-456-7890',
    addresses : [
       { street: '123 Sesame St', city: 'Anytown', cc: 'USA' },
       { street: '123 Avenue Q', city: 'New York', cc: 'USA' }
    ]
  }

  schema:[

  ]

  https://json-schema.org/understanding-json-schema/reference/array.html

  ## exemplos de validação
  http://learnmongodbthehardway.com/schema/schemabasics/
  https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1
  https://docs.mongodb.com/manual/core/schema-validation/
  https://code.tutsplus.com/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527

  var bookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    summary: String,
    isbn: String,
    thumbnail: Buffer,
    author: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Author'
    },
    ratings: [
        {
            summary: String,
            detail: String,
            numberOfStars: Number,
            created: { 
                type: Date,
                default: Date.now
            }
        }
    ],
    created: { 
        type: Date,
        default: Date.now
    }
});

****
db.createCollection( "contacts",
   { validator: { $or:
      [
         { phone: { $type: "string" } },
         { email: { $regex: /@mongodb\.com$/ } },
         { status: { $in: [ "Unknown", "Incomplete" ] } }
      ]
   }
} )

validadores e regex:
email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
cpf/cnpj: ([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})

*****
  db.createCollection("students", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "name", "year", "major", "address" ],
          properties: {
             name: {
                bsonType: "string",
                description: "must be a string and is required"
             },
             year: {
                bsonType: "int",
                minimum: 2017,
                maximum: 3017,
                description: "must be an integer in [ 2017, 3017 ] and is required"
             },
             major: {
                enum: [ "Math", "English", "Computer Science", "History", null ],
                description: "can only be one of the enum values and is required"
             },
             gpa: {
                bsonType: [ "double" ],
                description: "must be a double if the field exists"
             },
             address: {
                bsonType: "object",
                required: [ "city" ],
                properties: {
                   street: {
                      bsonType: "string",
                      description: "must be a string if the field exists"
                   },
                   city: {
                      bsonType: "string",
                      "description": "must be a string and is required"
                   }
                }
             }
          }
       }
    }
 })







 *************** colas aulas
 # 19
    criacao dos modulos no material
    post do blog pra adicao, e imports:
    
        cd front-end
        ng generate module material

        troca o conteudo pelo post do blog (./front-end/src/app/material/material.module.ts)

        configurar no app.module.ts pra adicionar o import
        import { MaterialModule } from './material/material.module';



gerando os modulos
cat colas.txt
cd front-end
    gerando os fronts
ng generate component ui/main-toolbar
    dentro do app.component.ts, seta as variaveis do nome do app
    mas vao ficar invocadas no var appName dentro do main-toolbar.component.ts

alteração pra ficar separadas as configuraçoes e html no angular novo
    edita o angular.json na base da aplicaçaõ e troca as linhas de template e estilo
    "schematics": {
        "@schematics/angular:component": {
          "inlineTemplate": false,
          "inlineStyle": false,
          "style": "scss",
          "skipTests": true
        },} 

  
criando servico de busca e listagem
   ng generate component grupo/grupo-list
ng g c usuario/usuario-list && ng g c estagiario/estagiario-list && ng g c pcontraria/pcontraria-list && ng g c supervisor/supervisor-list
   
## aula 20
gerando os servicos pro frontend buscar no back
   ng generate service acao/acao
ng g s acao/acao && ng g s estagiario/estagiario && ng g s pcontraria/pcontraria && ng g s usuario/usuario && ng g s supervisor/supervisor

no back-end:
   yarn add cors


## aula  21 cria o modulo do confirma
front-end> ng g c ui/confirm-dlg

## aula 22 modulos de edicao 
   ng g c estagiario/estagiario-form

trocando a paleta de cores pra id visual da unesp #0093DD
http://www.carbonrider.com/2019/01/30/material-theme-with-angular-7-change-primary-and-accent-color/
http://mcg.mbitson.com

/* For use in src/lib/core/theming/_palette.scss 
cor principal - #0093dd
acentuacao sgcd #346786 */
/* principal */
$mat-unesp-primary: (
    50 : #e7edf0,
    100 : #c2d1db,
    200 : #9ab3c3,
    300 : #7195aa,
    400 : #527e98,
    500 : #346786,
    600 : #2f5f7e,
    700 : #275473,
    800 : #214a69,
    900 : #153956,
    A100 : #90caff,
    A200 : #5db1ff,
    A400 : #2a98ff,
    A700 : #118cff,
    contrast: (
        50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #ffffff,
        500 : #ffffff,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #ffffff,
    )
);


$mat-unesp-accent: (
    50 : #e0f2fb,
    100 : #b3dff5,
    200 : #80c9ee,
    300 : #4db3e7,
    400 : #26a3e2,
    500 : #0093dd,
    600 : #008bd9,
    700 : #0080d4,
    800 : #0076cf,
    900 : #0064c7,
    A100 : #eff6ff,
    A200 : #bcd9ff,
    A400 : #89bdff,
    A700 : #6fafff,
    contrast: (
        50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #ffffff,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

## rodar o vetor dentro do find
ngfor


## expandable rows table material.io
<table mat-table
       [dataSource]="dataSource" multiTemplateDataRows
       class="mat-elevation-z8">
  <ng-container matColumnDef="{{column}}" *ngFor="let column of columnsToDisplay">
    <th mat-header-cell *matHeaderCellDef> {{column}} </th>
    <td mat-cell *matCellDef="let element"> {{element[column]}} </td>
  </ng-container>

  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->
  <ng-container matColumnDef="expandedDetail">
    <td mat-cell *matCellDef="let element" [attr.colspan]="columnsToDisplay.length">
      <div class="example-element-detail"
           [@detailExpand]="element == expandedElement ? 'expanded' : 'collapsed'">
        <div class="example-element-diagram">
          <div class="example-element-position"> {{element.position}} </div>
          <div class="example-element-symbol"> {{element.symbol}} </div>
          <div class="example-element-name"> {{element.name}} </div>
          <div class="example-element-weight"> {{element.weight}} </div>
        </div>
        <div class="example-element-description">
          {{element.description}}
          <span class="example-element-description-attribution"> -- Wikipedia </span>
        </div>
      </div>
    </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="columnsToDisplay"></tr>
  <tr mat-row *matRowDef="let element; columns: columnsToDisplay;"
      class="example-element-row"
      [class.example-expanded-row]="expandedElement === element"
      (click)="expandedElement = expandedElement === element ? null : element">
  </tr>
  <tr mat-row *matRowDef="let row; columns: ['expandedDetail']" class="example-detail-row"></tr>
</table>




