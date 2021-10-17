# Investasi (Ribu Rupiah)                                           

Investasi adalah kegiatan menempatkan modal baik berupa uang atau aset berharga ke dalam suatu benda, lembaga, atau suatu pihak dengan harapan pemodal akan mendapatkan keuntungan setelah kurun waktu tertentu. Ada beberapa macam instrumen investasi yang populer di Indonesia antara lain adalah emas, reksa dana dan saham.

Selama 1 tahun Jasmine, Kei, dan Luna menginvestasikan modal yang mereka miliki. Jasmine menginvestasikan sebesar Rp 100.000,00 masing-masing pada emas dan saham serta Rp 200.000,00 pada reksa dana. Kei menginvestasikan Rp 150.000,00 pada saham dan Rp 300.000,00 pada reksa dana. Luna menginvestasikan Rp 200.000,00 pada saham, Rp 250.000,00 dan Rp 100.000,00 pada reksadana. 

Pada akhir tahun mereka mendapatkan keuntungan yang berbeda. Jasmine mendapat keuntungan Rp 22.000,00 dari total investasinya. Kei mendapat keuntungan Rp 27.000,00 dari total investasinya. Luna mendapat keuntungan Rp 33.000,00 dari total investasinya. Apabila keuntungan per tahun dari investasi pada emas adalah x%, keuntungan per tahun dari investasi pada saham adalah y%, dan keuntungan per tahun dari investasi pada reksa dana adalah z%, tentukan : 

    - [ ] Sistem persamaan linear yang berlaku pada wacana di atas.
    - [ ] Keuntungan investasi pada emas, saham, dan reksa dana.

Tenggat: 18 Okt 23.59
[link ke gcr](https://classroom.google.com/u/0/c/MzczNDIwNzU5NjQ1/a/NDExMDAyNDc1NDI5/details)
> Masukin ke ppt

## Informasi
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

        (L) Luna -> Emas = 250
                    Saham = 200
                    RekaDana = 100

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
        (L) 250x + 200y + 100z = 33 -- > [persamaan ke 3]

        |(J) . 5| 500x + 500y + 1000z = 110
        |(L) . 2| 500x + 400y + 200z  = 66
        ----------------------------------[eliminasi (-)]
        --> 100y + 800z = 44 --------- > [persamaan ke 4]

        |(J) . 3| 300y + 2400z = 132
        |(K) . 2| 300y + 600z  = 54 
        ----------------------------------[eliminasi (-)]
        --> 1800z = 78
            z     = 0,0433
            z     = 4,33%

        (K) 150y + 300z = 27
            150y + 300(0,0433) = 27
            150y + 13 = 27
            150y = 14
            y = 0,0933
            y = 9,33%

        (J) 100x + 100y + 200z = 22
            100x + 100(0,0933) + 200(0,0433) = 22
            100x + 9,33 + 8,66 = 22
            100x + 18 = 22
            100x = 4
            x = 0,04
            x = 4%

## Kesimpulan
    ### Jawaban dari soal
    -[✔️] Sistem persamaan linear yang berlaku pada wacana di atas.
        (J) 100x + 100y + 200z = 22
        (K) 150y + 300z = 27
        (L) 250x + 200y + 100z = 33

    -[✔️] Keuntungan investasi pada emas, saham, dan reksa dana.
        * Keuntungan dari emas 4%
        * Keuntungan dari saham 9,33%
        * Keuntungan dari Rekadana 4,33%

    ### Cek
        (J) Jasmine -> Emas = 100 . 4% --> 4
                       Saham = 100 . 9,33% --> 9,33
                       RekaDana = 200 . 4,33% --> 8,66
                       [✔️] ---->> 21,99

        (K) Kei -> Saham = 150 . 9,33% --> 13,995
                   RekaDana = 300 . 4,33% --> 12,99
                   [✔️] ---->> 26,98

        (L) Luna -> Emas = 250 . 4% --> 10
                    Saham = 200 . 9,33% --> 18,66
                    RekaDana = 100 . 4,33% --> 4,33
                    [✔️] ---->> 32,99

<!-- Cek semua -->
