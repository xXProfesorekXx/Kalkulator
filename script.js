function policz() {
  // Pobieramy wartości z inputów
  const a = Number(document.getElementById("liczba1").value);
  const b = Number(document.getElementById("liczba2").value);
  const c = Number(document.getElementById("liczba3").value);

  // Dodajemy liczby
  const wynik = a + b + c;

  // Wrzucamy wynik do paragrafu
  document.getElementById("wynik").textContent = "Wynik to: " + wynik;
}

function odejmij() {
   // Pobieramy wartości z inputów
  const d = Number(document.getElementById("liczba1").value);
  const e = Number(document.getElementById("liczba2").value);
  const f = Number(document.getElementById("liczba3").value);

  // Odejmujemy liczby
  const wynik = d - e - f;

  document.getElementById("wynik").textContent = "Wynik to: " + wynik;
}

function mnoz() {
  const a = Number(document.getElementById("mno1").value);
  const b = Number(document.getElementById("mno2").value);
  const wynik = a * b;
  document.getElementById("wynikMnoz").textContent = "Wynik to: " + wynik;
}

function dziel() {
  const a = Number(document.getElementById("dziel1").value);
  const b = Number(document.getElementById("dziel2").value);
  
  if (b === 0) {
    document.getElementById("wynikDziel").textContent = "Nie dziel przez zero, debilu!";
  } else {
    const wynik = a / b;
    document.getElementById("wynikDziel").textContent = "Wynik to: " + wynik;
  }
}

function wyczyscWszystko() {
  const inputy = document.querySelectorAll("input");
  inputy.forEach(input => input.value = "");

  document.getElementById("wynik").textContent = "";
  document.getElementById("wynikMnoz").textContent = "";
  document.getElementById("wynikDziel").textContent = "";
}
