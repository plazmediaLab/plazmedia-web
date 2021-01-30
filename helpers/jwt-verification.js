// jwt-verification
import jwtDecode from 'jwt-decode';

class jwtVerification {
  constructor(JWT) {
    // Vamos a utilizar por defecto un decodedToken caducado
    this.decodedToken = { email: '', exp: 0 };
    console.log(JWT);

    // Decodificar el jwt usando jwt-decode
    try {
      if (JWT) this.decodedToken = jwtDecode(JWT);
    } catch (err) {
      console.log(err);
    }
  }

  get expiresAt() {
    return new Date(this.decodedToken.exp * 1000);
  }

  get isExpired() {
    return new Date() > this.expiresAt;
  }

  get isValid() {
    return !this.isExpired;
  }
}

export default jwtVerification;
