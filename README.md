# Investasi (Ribu Rupiah)

Investasi adalah kegiatan menempatkan modal baik berupa uang atau aset berharga ke dalam suatu benda, lembaga, atau suatu pihak dengan harapan pemodal akan mendapatkan keuntungan setelah kurun waktu tertentu. Ada beberapa macam instrumen investasi yang populer di Indonesia antara lain adalah emas, reksa dana dan saham.

Selama 1 tahun Jasmine, Kei, dan Luna menginvestasikan modal yang mereka miliki. Jasmine menginvestasikan sebesar Rp 100.000,00 masing-masing pada emas dan saham serta Rp 200.000,00 pada reksa dana. Kei menginvestasikan Rp 150.000,00 pada saham dan Rp 300.000,00 pada reksa dana. Luna menginvestasikan Rp 200.000,00 pada saham, Rp 250.000,00 dan Rp 100.000,00 pada reksadana. 

Pada akhir tahun mereka mendapatkan keuntungan yang berbeda. Jasmine mendapat keuntungan Rp 22.000,00 dari total investasinya. Kei mendapat keuntungan Rp 27.000,00 dari total investasinya. Luna mendapat keuntungan Rp 33.000,00 dari total investasinya. Apabila keuntungan per tahun dari investasi pada emas adalah x%, keuntungan per tahun dari investasi pada saham adalah y%, dan keuntungan per tahun dari investasi pada reksa dana adalah z%, tentukan :
    a. Sistem persamaan linear yang berlaku pada wacana di atas.
    b. Keuntungan investasi pada emas, saham, dan reksa dana.

[link ke gcr] (https://classroom.google.com/u/0/c/MzczNDIwNzU5NjQ1/a/NDExMDAyNDc1NDI5/details)
Tenggat: 18 Okt 23.59

## Informasi
    ### Initialize var
        Emas = x
        Saham = y
        RekaDana = y

    ### Initialize person
        (J) Jasmine -> Emas = 100
                Saham = 100
                RekaDana = 200

        (K) Kei -> Saham = 150
            RekaDana = 300

        (L) Luna -> Emas = 250
                Saham = 200
                RekaDana = 100

    ### var totalKeuntungan
        (J) Jasmine = 22
        (K) Kei = 27
        (L) Luna = 33

    ### var keuntungan
        x%
        y%
        z%

## Implementasi
    ### Persamaan Linear:
        (J) 100x + 100y + 200z = 22
        (K) 150y + 300z = 27
        (L) 250x + 200y + 100z = 33

        |J . 5| 500x + 500y + 1000z = 110
        |L . 2| 500x + 400y + 200z  = 66
        ----------------------------------[eliminasi (-)]
        --> 100y + 800z = 44

        |J . 3| 300y + 2400z = 132
        |K . 2| 300y + 600z  = 54 
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

