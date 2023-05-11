//AUTHOR: xXConcasXx

class WrappedModal {
  constructor(id, title, body, options, buttons) {
    this.id = id;
    this.title = title || 'title';
    this.body = body;
    this.options = options || null;
    this.buttons = buttons || null;
  }

  show() {
    if (isNullUndefinedOrEmpty(this.id)) {
      throw new Error('ID cannot be empty.');
    }

    if (isNullUndefinedOrEmpty(this.body)) {
      throw new Error('Body cannot be empty.');
    }

    const modal = document.createElement('div');
    const modalDialog = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalHeader = document.createElement('div');
    const modalTitle = document.createElement('h5');
    const modalBody = document.createElement('div');
    const modalFooter = document.createElement('div');
  
    modal.setAttribute('class', 'modal');
    modal.setAttribute('id', this.id);
    modal.setAttribute('tabindex', !isNullUndefinedOrEmpty(this.options.tabindex) ? this.options.tabIndex : '-1');
    modal.setAttribute('aria-hidden', !isNullUndefinedOrEmpty(this.options.ariaHidden) ? this.options.ariaHidden : 'true');

    modalDialog.setAttribute('class', 'modal-dialog');
    modalContent.setAttribute('class', 'modal-content');
    modalHeader.setAttribute('class', 'modal-header');
    modalTitle.setAttribute('class', 'modal-title');
    modalTitle.innerText = this.title;
    modalBody.setAttribute('class', 'modal-body');
    modalBody.insertAdjacentHTML('afterbegin', this.body);
    modalFooter.setAttribute('class', 'modal-footer');

    if (isNullUndefinedOrEmpty(this.buttons)) {
      const defaultButton = document.createElement('button');

      defaultButton.setAttribute('type', 'button');
      defaultButton.setAttribute('class', 'btn btn-primary');
      defaultButton.setAttribute('data-bs-dismiss', 'modal');
      defaultButton.innerText = 'OK';

      modalFooter.append(defaultButton);
    } else {
      this.buttons.forEach( (button) => {
        const customButton = document.createElement('button');

        customButton.setAttribute('type', 'button');
        customButton.setAttribute('class', button.class);
        customButton.innerText = button.text;

        if (!isNullUndefinedOrEmpty(button.dismiss) && button.dismiss) {
          customButton.setAttribute('data-bs-dismiss', 'modal');
        }

        customButton.addEventListener('click', button.function, { once: false });

        modalFooter.appendChild(customButton);
      });
    }

    if (!isNullUndefinedOrEmpty(this.options.fade) && this.options.fade) {
      modal.classList.add('fade');
    }

    if (!isNullUndefinedOrEmpty(this.options.shadow) && this.options.shadow) {
      modalContent.classList.add('shadow');
    }

    if (!isNullUndefinedOrEmpty(this.options.static) && this.options.static) {
      modal.setAttribute('data-bs-backdrop', 'static');
      modal.setAttribute('data-bs-keyboard', 'false');
    }

    if (!isNullUndefinedOrEmpty(this.options.scrollable) && this.options.scrollable) {
      modalDialog.classList.add('modal-dialog-scrollable');
    }

    if (!isNullUndefinedOrEmpty(this.options.centered) && this.options.centered) {
      modalDialog.classList.add('modal-dialog-centered');
    }

    if (!isNullUndefinedOrEmpty(this.options.size)) {
      switch (this.options.size) {
        case 'xl':
          modalDialog.classList.add('modal-xl');
          break;
        case 'lg':
          modalDialog.classList.add('modal-lg');
          break;
        case 'sm':
          modalDialog.classList.add('modal-sm');
          break;
      }
    }

    modal.addEventListener('hidden.bs.modal', () => {
      document.body.removeAttribute('class');
      document.body.removeAttribute('style');

      if (!isNullUndefinedOrEmpty(this.options.reload) && this.options.reload) {
        location.reload();
      }
  
      modal.remove();
    });

    modalHeader.append(modalTitle);

    modalContent.append(modalHeader);
    modalContent.append(modalBody);
    modalContent.append(modalFooter);

    modalDialog.append(modalContent);

    modal.append(modalDialog);

    document.body.append(modal);

    new bootstrap.Modal(document.getElementById(this.id)).toggle();
  }
}
