class Formatter {
    //add static methods here
    static capitalize (string) {
      return string.charAt(0).toUpperCase();  

    }
    static sanitize () {}
    static titleize () {}
  }

let formatter = new Formatter('crocodile')
Formatter.capitalize();