# Investasi (Ribu Rupiah)                                           

Investasi adalah kegiatan menempatkan modal baik berupa uang atau aset berharga ke dalam suatu benda, lembaga, atau suatu pihak dengan harapan pemodal akan mendapatkan keuntungan setelah kurun waktu tertentu. Ada beberapa macam instrumen investasi yang populer di Indonesia antara lain adalah emas, reksa dana dan saham.

Selama 1 tahun Jasmine, Kei, dan Luna menginvestasikan modal yang mereka miliki. Jasmine menginvestasikan sebesar Rp 100.000,00 masing-masing pada emas dan saham serta Rp 200.000,00 pada reksa dana. Kei menginvestasikan Rp 150.000,00 pada saham dan Rp 300.000,00 pada reksa dana. Luna menginvestasikan Rp 200.000,00 pada emas, Rp 250.000,00 pada saham dan Rp 100.000,00 pada reksadana. 

Pada akhir tahun mereka mendapatkan keuntungan yang berbeda. Jasmine mendapat keuntungan Rp 22.000,00 dari total investasinya. Kei mendapat keuntungan Rp 27.000,00 dari total investasinya. Luna mendapat keuntungan Rp 33.000,00 dari total investasinya. Apabila keuntungan per tahun dari investasi pada emas adalah x%, keuntungan per tahun dari investasi pada saham adalah y%, dan keuntungan per tahun dari investasi pada reksa dana adalah z%, tentukan : 

    - [ ] Sistem persamaan linear yang berlaku pada wacana di atas.
    - [ ] Keuntungan investasi pada emas, saham, dan reksa dana.

[link ke gcr](https://classroom.google.com/u/0/c/MzczNDIwNzU5NjQ1/a/NDExMDAyNDc1NDI5/details)
Tenggat: 18 Okt 23.59
> Masukin ke ppt

## Informasi
    ### Inisialisasi variabel
    inisialisasi variabel barang
        Emas = x
        Saham = y
        RekaDana = y

    inisialisasi variabel orang
        (J) Jasmine -> Emas = 100
                       Saham = 100
                       RekaDana = 200

        (K) Kei -> Saham = 150
                   RekaDana = 300

        (L) Luna -> Emas = 200
                    Saham = 250
                    ReksaDana = 100

    inisialisasi variabel total keuntungan
        (J) Jasmine = 22
        (K) Kei = 27
        (L) Luna = 33

    inisialisasi variabel keuntungan
        x%
        y%
        z%
    
    |Nominal dibagi 1000|

## Implementasi
    ### Persamaan Linear:
        (J) 100x + 100y + 200z = 22 -- > [persamaan ke-1]
        (K) 150y + 300z = 27 --------- > [persamaan ke-2]
        (L) 200x + 250y + 100z = 33 -- > [persamaan ke 3]

        eliminasi [1]
        |(J) * 5| 500x + 500y + 1000z = 110
        |(L) * 2| 400x + 500y + 200z = 66
        ----------------------------------[eliminasi (-)]
        --> 100x + 800z = 44 --------- > [persamaan ke-4]

        eliminasi [2]
        |(J) * 3| 300x + 300y + 600z = 66
        |(K) * 2|        300y + 600z = 54
        ----------------------------------[eliminasi (-)]
        --> 300x = 12
              x  = 1/25
              x  = 0,04 
              x  = 4%

        subtitusi [persamaan ke-4]
        100x + 800z = 44
        100(0,04) + 800z = 44
        4 + 800z = 44
        800z = 40
          z  = 1/20 
          z  = 0,05 
          z  = 5%

        subtitusi [persamaan ke-1]  
        100x + 100y + 200z = 22
        100(0,04) + 100y + 200(0,05) = 22
            4     + 100y +    10     = 22
                    100y = 8
                      y  = 8/100
                      y  = 0,08
                      y  = 8%

## Kesimpulan
    ### Jawaban dari soal
    - [✔️] Sistem persamaan linear yang berlaku pada wacana di atas.
        (J) 100x + 100y + 200z = 22
        (K) 150y + 300z = 27
        (L) 200x + 250y + 100z = 33

    - [✔️] Keuntungan investasi pada emas, saham, dan reksa dana.
        * Keuntungan dari emas 4%
        * Keuntungan dari saham 8%
        * Keuntungan dari Reksadana 5%

    ### Cek
        (J) Jasmine -> Emas = 100 . 4% --> 4
                       Saham = 100 . 8% --> 8
                       ReksaDana = 200 . 5% --> 10
                       [✔️] ---->> 22

        (K) Kei -> Saham = 150 . 8% --> 12
                   ReksaDana = 300 . 5% --> 15
                   [✔️] ---->> 27

        (L) Luna -> Emas = 200 . 4% --> 8
                    Saham = 250 . 8% --> 20
                    ReksaDana = 100 . 5% --> 5
                    [✔️] ---->> 33

<!-- Cek semua -->
