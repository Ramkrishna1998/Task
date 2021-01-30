import { store as Alert } from 'react-notifications-component';

const success = (title: string) => {
  Alert.addNotification({
    title: 'Success',
    message: title,
    type: 'success',
    insert: 'top',
    container: 'bottom-right',
    // animationIn: ["animate__animated", "animate__fadeIn"],
    // animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1500,
      onScreen: true
    }
  });
};

const warning = (title: string) => {
  Alert.addNotification({
    title: 'Warning',
    message: title,
    type: 'warning',
    insert: 'top',
    container: 'bottom-right',
    // animationIn: ["animate__animated", "animate__fadeIn"],
    // animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1500,
      onScreen: true
    }
  });
};

const danger = (title: string) => {
  Alert.addNotification({
    title: 'Warning',
    message: title,
    type: 'danger',
    insert: 'top',
    container: 'bottom-right',
    // animationIn: ["animate__animated", "animate__fadeIn"],
    // animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1500,
      onScreen: true
    }
  });
};

export { success, warning, danger };
