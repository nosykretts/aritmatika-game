
**GAME ARITMATIKA ANAK-ANAK**

Deskripsi: Game ini adalah game operasi matematika dasar. Pertambahan, Pengurangan, dan Perkalian.

Repo Purpose: Homework Exercise 16 - Week 2 - Phase 0 @hacktiv8

Note: Pembagian tidak diikutkan karena harus berurusan dengan parsing float sehingga menambah panjang pseudocode.

**Pseudocode dari game ini**
```
FUNCTION generateRandomNumber(min, max)
  SIMPAN 'randomNum' sama dengan built-in function Math Random
  HITUNG 'randomNum' dikali ('max' dikurang 'min' ditambah 1)
  SIMPAN perhitungan sebelumnya
  HITUNG 'randomNum' bulatkan kebawah dengan presisi 0
  SIMPAN perhitungan sebelumnya
  HITUNG 'randomNum' ditambah 'min'
  SIMPAN perhitungan sebelumnya
  RETURN 'randomNum'
END FUNCTION


FUNCTION generateSoalJawaban()
  SIMPAN 'num1' sama dengan function generateRandomNumber(1, 10)
  SIMPAN 'num2' sama dengan function generateRandomNumber(1, 10)
  SIMPAN 'randomOperator' sama dengan generateRandomNumber(0,2)
  SIMPAN 'jawaban'
  SIMPAN 'soalWord'
  SWITCH 'randomOperator'
    CASE 0:
      HITUNG 'num1' dikali 'num2' 
      SIMPAN 'jawaban' sama dengan perhitungan sebelumnya
      SIMPAN 'soalWord' dengan kalimat 'num1' ' x ' 'num2'
      BREAK;
    CASE 1:
      HITUNG 'num1' ditambah 'num2'
      SIMPAN 'jawaban' sama dengan perhitungan sebelumnya
      SIMPAN 'soalWord' dengan kalimat 'num1' ' + ' 'num2' 
      BREAK;
    DEFAULT:
      HITUNG 'num1' dikurang 'num2' 
      SIMPAN 'jawaban' sama dengan perhitungan sebelumnya
      SIMPAN 'soalWord' dengan kalimat 'num1' ' - ' 'num2'
  END SWITCH
  RETURN array [soalWord, jawaban]
END FUNCTION


TAMPILKAN Judul dan Peraturan permainan
TENTUKAN 'nilai' sama dengan 0
FOR setiap pertambahan 1 pada `i` dari 1 sampai dengan 10:
  SIMPAN 'dataItem' sama dengan fungsi generateSoalJawaban()
  SIMPAN 'soalWord' sama dengan 'dataItem' indeks 0
  SIMPAN 'kunciJawaban' sama dengan 'dataItem' indeks 1
  TAMPILKAN 'soalWord'
  READ and SIMPAN 'inputJawaban'
  SIMPAN 'inputJawabanParsed' sama dengan konversi 'inputJawaban' ke Number
  TULISKAN karakter kosong
  TULISKAN 'soalWord' TAMBAHKAN karakter ' = ' TAMBAHKAN 'inputJawaban'
  TULISKAN kalimat jawaban kamu: ditambahkan 'inputJawaban'
  IF 'kunciJawaban' sama dengan 'inputJawabanParsed'
    TULISKAN Jawaban benar
    INCEREMENT nilai
  ELSE
    TULISKAN Jawaban salah  
  END IF
ENDFOR
TULISKAN karakter kosong
TULISKAN nilai kamu: 'nilai'
```
