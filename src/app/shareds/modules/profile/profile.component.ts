import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true

})
export class ProfileComponent {
  @Input() animation: boolean = false;

  nome: string;
  occupation: string = ''
  letterName: string
  photoUser: boolean = false;
  img: string = '../assets/images/gato.jpg';
  visible: boolean = false;
  imagePreview: string | ArrayBuffer | null = null;
  profilePhotoForm: FormGroup;

  // constructor(
  //   private formBuilder: FormBuilder,
  //   private profileService: ProfileService,
  //   private userService: UserService,
  // ) {
  //   this.profilePhotoForm = this.formBuilder.group({
  //     file: [null]
  //   })
  // }
  // ngOnInit(): void {
  //   this.nome = this.userService.currentUser().username;
  //   console.log(this.nome)
  //   this.letterName = this.getTreeLetters(this.nome);
  // }
  //
  // getTreeLetters(str: string) {
  //   const onlyLetters = str.replace(/[^a-zA-Z]/g, "");
  //   return onlyLetters.substring(0, 3);
  // }
  //
  // showDialog() {
  //   this.visible = true;
  // }
  //
  // onUpload(event: any): void {
  //   const file = event.target.files[0];
  //   const allowedTypes =['image/png', 'image/jpeg', 'image/jpg','image/gif']
  //   if(file && allowedTypes.includes(file.type)){
  //     // event.targetvalue = file;
  //     this.profilePhotoForm.patchValue({
  //       file: file
  //     });
  //     if(this.photoUser)
  //       this.updatePhoto();
  //     this.profilePhotoForm.get('file')?.updateValueAndValidity();
  //     const reader = new FileReader();
  //
  //     reader.onload = () => {
  //       this.imagePreview = reader.result;
  //       // console.log('img:', this.imagePreview)
  //     }
  //     reader.readAsDataURL(file);
  //     this.photoUser = true;
  //   } else {
  //     alert('Arquivo não permitido! Por favor selecione uma imagem válida!')
  //     event.target.value =''
  //   }
  // }
  // updatePhoto() {
  //
  //   // aqui eu crio a função para atualizar a imagem de perfil
  //
  // }
  // deleteFile(){
  //
  //   // aqui eu crio a função para remover a imagem de perfil
  //
  //   // this.profileService.deleteFile(photoID)
  //   // .then((res: any) => {
  //   //   console.log('Imagem deletada com sucesso',res)
  //   // })
  //   // .catch((err: any) => {
  //   //   console.log('Não foi possível deletar a imagem', err)
  //   // })
  //
  //   this.photoUser = false;
  // }
  //
  // close() {
  //   this.profilePhotoForm.reset()
  //   this.visible = false;
  // }
}
