import { ToastOptions } from 'ng2-toastr';

export class AppToastOptions extends ToastOptions {
  showCloseButton = true;
  toastLife = 2500;
}
