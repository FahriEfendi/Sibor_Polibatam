import React, { useState } from 'react';
import { Typography, Button, Container, Grid, Card, CardContent, AppBar, Toolbar, IconButton,Fab } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Helmet } from 'react-helmet-async';

function Home() {
  // Data contoh ruangan
  const rooms = [
    {
      name: 'Ruang Kelas',
      description: 'Ruangan yang cocok untuk pertemuan kecil hingga sedang.',
      image: 'https://stietribhakti.ac.id/wp-content/uploads/2022/02/IMG_0651-scaled.jpg', // URL gambar untuk Ruangan Meeting
    },
    {
      name: 'Auditorium',
      description: 'Aula besar dengan kapasitas hingga 200 orang untuk acara besar atau kegiatan Mahasiswa.',
      image: 'https://www.ifi-id.com/wp-content/uploads/2021/02/03-scaled.jpg', // URL gambar untuk Aula Utama
    },
    {
      name: 'Ruang Lab',
      description: 'Ruangan yang nyaman dengan fasilitas modern untuk pembelajaran.',
      image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFhYYGBgYHBodGRkYGBwcGhocGRgZGhgaGBgcIS4lHB4rIRgaJjgmKzA0NTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzYrJCs0NDQ0NDQ0NDQ0NDQ0NjQ0NDQ0NDQ0NDY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAgMEBQYHAQj/xABEEAACAQIDBQMIBwYFBAMAAAABAhEAAwQSIQUiMUFRBmFxEzKBkaGxwdEHFEJSYnKyIySCkqLCM2Oz4fBDU3PSFaPi/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAiEQEBAQEBAQACAgIDAAAAAAAAARECITESUQNBkaEiYXH/2gAMAwEAAhEDEQA/ANByUIqQOBbp7aTOFYfZNMDPJXMlOjaPSim3QN8tcy0uUopSoEctcy0sVrmWgRiuRSpWuEUUnFCjxQigJFCKNloZaAkUKNFCKAtCa7FCKDldmuEUVkJoDzXQaY7MxRuqzRGV3SAZ8wxT5VoDCuigBRgKACjCgBXQKAAUYCgBRhQdUU4s2yaRWl7TxwqodpYrrWq7bvg8aVzDqKuhhcSmzCnmJYciKYu9KCVyuZ6FQLLiWH2j66VXHN191MRh35LPgyn3Gh5K4PsN6qYJIY88wDQ+uKeKiopmYcVI8RXBdoJby1s8VPorjeS/FUYLld8pQKvE6cK5SflK5nqA9CKJ5SueUoFIoZaJ5SuG8BQKZaGWiJiR0NOUdT19VAjkoZKdi2KWSwp4sKojvJ1zydSZwvRgfTRThD0pgjfJ0hi7wtoXIJiBCxJLMFUCSBqSBrUlctxxEU2xOHV1KNMHoSDoZBBGoMjjQUvZe2HspcDYd2i7clgygBmeMrRMEZlHMVONtV1VmfDuuQBnl0lVM66HXzToOlIWOzCHyucuQ7swAuNBGaQza6twkmfNFSR2akQQzA8QzuZ7iM2o7jTwPIoUSSeAJ8K69thq2VR1d1X3mgNNGDVHX9p4dPOxNgeD5j6lBpCztm1cYrZfymXzmVSFE8NW1PqpgmA1GzVGNec6CBNNlwV9vOxJ8ERV9upqCeDUBcHWoVNjA+fcuv8AmfT1CnabOVBur05k+81RIfWQOdIttNBOa6ixxzOB7ONN0WWKwZH/AD41mm3nzYi6eQdh/Lp8KsPrR7vaDCjzsQp/KrH2kAVG4ntlg0BjyrkcoCg+BrN2HHu+Biipbkx4j1RTYuL43b+xywzel6FUJLMgHqAfWJoVdMIjaV6AvlbkchnaJLa6T1pe12hxKrC3nABBGomZJ86JI7pio11InuJ9jg/GuBDJHf7nI+NTTFn2N2gxF+/at3brleGjEE7sjMRx1jWr+FrJ9hkriMOfxqPh8K2AWzUoQ16mhnbrS5SiFKiEy7daI15hzpYpSbppQVy523S27W7tlyVJBZHEdxAK0ovbvCkapiAem4flVH7RpGJuePwmosfD+3/eqNTwPa2xduLbQXJeYzqo4Ankx5CrBxFZB2ffLibR6XFHoYhf7q2ZUoDYG3vr/wA5VP27QHKofCrDr41OqaCEvYkZ2UMpIJkAgkeIHCgL3f7ah8Ev7zjF6XVP81tflT6+lUOvrA6iu/Wu8+imKJThLVB2/iYBbK7QCSFyzCgk8T3VWT2+wwErZutr9oqNI0MDj4VaMTa/Zv8Akf8AQaxx7e8O8+4N/tRZNX7Y/axsXfNpLS20yswYyznKNBroOfWrE1gnmaz3sAIxKd6fqRz8K1TydL6WYqPa1SmEvMNCE0IMEGQAQe6sle45O8xJ7yTxK9fRWx/SAsYC+e5fa61j11d9h0j32qiwjl/5/CPnVy+j3R7g/L8fnVUS3w/5/wBNKuH0fJvueqofYKFXgW9ZpVVfoPXTtbVKKlGTdLb9QPR/vS1uyebT6BS6JSqrQN0wwBLczWRbXT9pcPV7h9tbOBWPbVXffvNw+2q1zEYybp8T+tfnQtJvfxP+pac3bcIfH3tb+dFsJvfx3P1pUaxC33gj8qfoWhSWNO9/Cn6FoVUL3kkP6T61U/CjhN4+BP6G+NGVZB70tn+lgfdSlhZZPxIP0oP7ag5hRle233bnuc/Otu8mKxK6IJ7nB9eQ/GtuwzZkVuqqfWAaM9E2t0RrdOStEK1UNTbpN7dOitFZagyDtfajFN3/APp/vUFZScvePioqzduUjFDvy+4Cq3huFvxA/r/2o1D3Z27cRujWm/qU/Ct2e0IrCkSHI6Kv9Kv/AOtbyjZrat1VT6wDSJSVkbw8RUqhqMTiPGpBGoiuYO3++YzvNo//AF1I3LNNMOP33EfiS2fUoHxqTda0GiW4pdEoKtLIKiEsYP2b/kf9JrHnt7yfm+Y+NbFjv8J/yP8ApNZHitHt/mP+qg+NSunJ72GaMTa/Ja9q3FrWYrHuyFzLirP5LXsuMv8AdWxGrPiVVPpIMYC73m2P61rJ8Rb37p6H+9P/AFNal9KDxgGHV7Y/qn4VmjCRePVl/wBS58hWackbSbw/Mv6Eq2fR+u94onuWq5h03yOjD2LHwq19g01U/wCWvuSkXr40JVpRVriDQUcCtMABRwKKKOKAVj21Tvnwf3IfjWw1jW0m3j+W4fYgo1yGKXcB65Pa1uksIN5vzv8ArSnGNH7NfC370+VI4Aeef8xv1JWXRWsUd70L+kUKWW3IB7h7BFCmsYd21/Qf6XI+NHww1tH+H9Y+VK3reW4ydGvJ6mzUhMIp+5cP6x86pCm0EhrncUP9P/5rYdjNmw9o/gX2KBWR7REtc70U+on51qfZR82EtH8PxNIlSpFEIpU0Q1WCZWiFaVNFNBlX0hJGJQ/k/u+VVZFgL3OR6merf9JKRdU/hT9Tj41UnG63dcb2ifjWW4ksn7xl6qPazr/dW0bIfNhrZ/Ao9QAPurGMU0X0bqiH1Xln31rnZi5OGy/cLD2SPfVL8SC07VqZ04VqMou2f35++0vsK/KpZhUI7xj1/FbI9Un4VONVKSijLUNitvKjlPJXWgxmy5U04nMTwpS9tlFthxDcJCsDkzTGcjgJgHxq5UPdqPlsXT0R/apA99ZJiuR+65/1rR+FXAdqDiMPiQUCZFURmLHfcKNYA68Kpt55VxzztA5nVW0HorNb5+D9m5GKsxxygfy4qK2iaw/C4pLOJR2cKE8oGOpyn6xmGg1Oh5VsWy9pJiEFxM2UkgFlKzHEgHl8qs+FVf6Un/dra/evWx7/AJ1nuG3kc9X+R97Grz9J7Fkw6D/uFvQuX51SsBZIUqxCgMTB0Y6yDB7l9lZq8jYVf2j9x+Yq1dguC/8AjT3LVRt4lUu3A0yYgAEk69BVq7AON0c/JL7Ms1YdXxotvhRqTtnSuvcA4kDxIFVzKCjCo/H7Ws2CouOFLAlVglmCxMKoJMSPXT1WkAjnRRyaxjHnej/Lf2sPlWymsYxp327rfvc1GuTjaGltP4PdPwpPZ40f/wAre8fKu7VfdQd/uRjSeBuhUcsYGcmf4jUdDDZtuba+n3mhTnY6/sV9P6jXKIV2smXE3B/n3P61qPvD9ncHR59cGrD2k2dcOKusqMVL22DRCndGaGOlRP1FgHDNbWY43E5d2aarEol45mU/etn2RWkdg7ubBp+GR8fjVF2fsZ7uTI6NklWIYkAsNBIHHnV67HbNuYe06PE55EGeXh4ULVhJqJ2jttLRYFWJWJiOccJ48R66N2hxV63YdsOme6YCLEiSeJEjQCTx5VTsY7QVuoXuQmdieByLJkacZ51YwsDdpZO7b0gkkvwjqAPHjFTVi9mRXOkqGI6SJrNbW0mLoiC1vgA6hmAU6spDceZPHQ1FbW2jtG8WNvy6WfsKsooQaKM+mbTiadWRZLU7t/FpcuxiDa3d2FN09WBhRBOvWo7E28M6+TR1DuQcyWyZIjhneVMCDrzqN2srtcadQQGMkc1BGvMx0pvh5TfzQRwIkGeEg8dJq+J7Fpfs15UWXV3hgUY5AQoBkNo2u8gHH7XdT7E4p7Nw2ka9uZXZbbKC4iYZeJXqAeBotm9fv4Ozaw7iyWzs1x2ySqsYAaOZYajXd76rfbDPZvXGdkzPlyLJbOogM4jgsggTExoDFSWNXVvsdtMwIICvrEjLJ5AAkwfSau6NoK86f/LMCDzHDRdPDMDWi9ne07IrteveWzJbb/EWUZs+ZQsQSN2eHEVOupJtSS25DHHbXxV52KM+hIBQAFVkgSw1A8TGtWDYW21w6sMRdhwiwHuI7MSWJI3pPFR6Kou3sM9wqlssyLJOeAWcs0s0aEgQB6etVu05koGg66TA0me6k75vyreep9i4b9647LLjM0FQZaSco9I5VJ4vHJZsXLVxlV4QqgZVYwWbRTrx5njOhiDUcmMLW1Zz9WTNwQsqk5ZEsupJBqJ2rfw1xnc3HZ2kyiEjMeAOYDQCBp0rM/kl8kq3jPthe1jHvulmyzWy4g5WG+VLNLyusDgNRuipbauARLlq4rMF3FvEo439C7JmAEaaaxUBsTY/lny58ilTld0ICsCpiFY8VY6nTTwqT2ps7DWbbg4lXdZZUDgqWC6bkNr3yKW+k52IG/iVa85AULnbeC5iEz+dHOB661Ds/wBqMPZwygB8iF5dwB9sEEjiSc66AdeQrNtmZ3UsuRIUk5VRNOEBgsk+mn21QHQ27Zd4NtmcuzF2yEQqHzQGcjTjp0rWsxYe2O38NjLY8nccOnmqwyq0kSToSYXNEazUVse/ZRLpdM2VGMQ2V2JQIC0Ag5uEDTM2tVbyDI4JVjl1IA1GhienDnVp2ZeZkYHDC4hZT5MNoSFgZokk8DHDj1p+WRZzbfEPhne7eGRGzk8EJ3cuuYnioHMk6dRV47MYcYch7jAFQUVEluMcW4cjwNRGyVfyjO2H8glu1cXdTLJYgkk/aaBxHfUxZcZFc84PsI+FWWWHupDbHaG4lywyPltM4V0ZASVAzOxaSeB0AHLjyqrJiRc2i73lhGvEguCEKI2UEE8d1V0HdSnaPaTW0TIdc7cyCQEWYI1HEcIpmdtuhVy9tGAjMC9xvxAZz1jQg6gcazev0Ys23rgxGNtOjr5JFVCSrggs7FyJULwyiZq+2cUjzkdWjjlMx3GsYfF38SuZRfxRkiNQh0B1RBl004jnWg9hMM6YUB7fknLuSmUrGsLoe4Cm/ssWsms3vdlbrF3zpDZUHnd5k6VoivVN292xXDu9gpldI3gM67yhgRwJ0PdS9YvMt+K32m2Q6YcXmdVCOqwCcxzaaaRETTbH4AnDo9tkdCwz5GBKZW0Lj7JJZdONHu7a+sHLcvOwkMqJhiygjmVmSBJ511cUi2wromRTCvdtqXOUQWVNQvDiT6Kk6/UWz9nWz9g4gW13rXM+f1JPTvoU92DeLWEYZoOaJjhnaKFRPyQH0mKVxgIJGe2h07mdf7aquCd86sksyEPx+4QefhWgfSXgka5admUHIV1JE5WnkPxe2qxh+yt47xVEWJ32AJH3srGa1rKe7LdrLVhMU7W1DMwdLamASEiAY0kiZjnRcR9Kl4g5MPaX87O/sXJUftPB27WHzsjOWRlRmc/s9N3MqoomWJAJ5VRs9JdKvWH7b4/E3Uto9tC7RKpouhkw5bgJOldwuKuuXF5w7o7JORZgQNAFgLrwqqbPwruCUD51OmUEAdcz6BdJ4mrr2V2KiqVxF5LV43IRC6M7yq+bD6tMjnwrPfMsytcWy7Fiw/Z6bHlTdcgpnyIoXlMA9fRUJ5HDPvM76iTmWddTplPh6j1q/wCHULaVOihY8B1rCdp4h7d50BK5XI08a4dfwy2Tl25/myW9LjtO5YdVCKQVygsVYLCiAFTOABos+FRqY9kP+Mo3gcuS3x5QCrHu4zVUd2bzmZvEmpLA7OVsO93g6vbRNQBqRnJ6mGWI763+HWe9f6Y/PnfJ/tbcXjr14SQrZGKaJJVlImPu8RqOlQ229nXLgDuSHbICzKQIQQTlAJ4awBzpXF7YvK7KGlQdFdQ0Trp0pvjdsXHCkNbzidAkusA65iNOHWdanHNl1rrqWZUO+ACOkOLknh5N1EdYfKSJ04DhVt2Lsu2iBbitbV5L3Ll6yNGTLCImYwOInWaqgvXrrau7NM6EDu40/wBsbIvWrFq/fl0uGLeZ2c6rm+1oBA5HlXXr/lMrnzfx9i34ntHatqbdjEW+QOS0bjMAoUhtF4gakdTVdhiAltL/AJ2aciWRIG7wywAfE99RWwHcuTaCKQpEuwVd4jw+7yq4YQX7ZXEO6YkLocNh0z5mIaGaSGCjQx3d9ZksuStW77iudp3dbVu21tEBYGQ7O7ZFjfZuAGfgDzqCS6mVgQSxjLroOpPWrbc2FdvRcuIiDgPrAvh9I18inLvJikV2a1q6WUoFCEFrO5xOraodQOscBrW5cmX6x1Lb4S+rYnEjOlltFVVRFKpCgAQWMcI1mo7E7OuI5tOFR4kom/ciAeCnKePXrVtwnbHDYdGREu32LaG6+doAAG8Rw0OmlRt7tleuNCW7dkH7WXOQI5qPnU39QxEYfZThlBt3YP3wUHcdwNA9Pqq0X8JhLVjK16zauHzmtgsW+7BdiW0PAjnoNBVcuX7zly112AnNlGUKsgEnJqo3hxPMVGvikTzUknmdPmTT2nkTTPhlXMlu5iI0LuSiA8oUkETx0FBNv37QItFMOpjzZJ/mc6n0VXmvlyAXyKx3mVSY0A4DU8OtWPC4XZ+bO7l2MefIXQAeaCOk6k8ax1nP3a1NvxI9n0u4m1fu+Ve6UhNSdJKs8Lovmnp11qw7N2UHZULlVCyWZNIBhhM5fbSeyNpYZEKI6AH7KgKvqURT7E7ZsIozFCCZVQMzEjTdUa+qrz/LPkheb91Wu2NpHyJhVuXQjuXcKWGYhBAgfhqJ2VcWwqlsHakk630uTIPHfbKJ7gKsGJZ0S9ewuGVHiXd5UsNSQACMxmfE1C4FcTjLcgM7gq5AgQNeA9XfTvbn9a1x+M/7WWz27dQB9XSByR8oHgMpipLZ3bdbrhPIMCZ1zgjQE9O6qpgOz9xLeIe5ZdQbZOdsogpJAAO8QTE6fZHXSVwN0I+FaJZLCsBwG/mG9zOhrneepc1v8ubzbi2YnFXyjvlyKqsx6kKCTE6zp3Vk228U1xyzEmQpEmYBUGB6603E4x3t3CYk2bxjgAFTWP5qy/Hpvfw2/wBC1vMsZ/LeTYYl7e9bkORAgSYMTA8JpjeLs6q+YszgHMd6Wgc/EU+u2/MnhmT30XFJnxkJIBvAAtxAzqAWnX19K6T45dND2FZCWETXdzDUa6O3Gu1BYfE3UXLAaC29B1liZ0PfQpjKY+lB2RLLrl8511RG4qGEZgY83lWcjH4i66oLtwl2AAzsBJMcF+Vah9J1rNhA33LiH1hl/uFZPh3dGW6qzkIMkHLx0mOVaiJHC7OW3ilt4mMhks0mGBRoMjU7wj0U4x2Hw1oMVu3C68iqIB/IA0+kVGvjbuJvJuhn0RFQcfOgASSTLGj7Rw2IN0/WJ8q8E58oJJWVkLoDAGnEc9azZd+tS+JY9nXtMGxBtw5DxcfTWSCTmJaddZ9PWSw+0sLYzMn1dHAlDaw2dpg6B30Hj3062L9HiXLaXrmJgXEV8iJvgMoMFmJ1E/dqQvbJ2Tg2HlS7kqSq3CTmyRmgKFE7w0NS8236suT4ruJ7TXHZmS5eIS2xCvlXM8Qu6mgAZgY/DVIuMcxzEkycxOpJ5yeZmtcxmxMNi1S9hwttMhTLbUANLHMWgecNR6Kqm0+yOX/DVQZ1zsz6dyj5GrM58LLfVRt3AWC8BzPQeHOpPZmFDX0JYLbVpLvC6KJG6dSToNBzpLGYDIQFkkEzuFDHM70T6udSOGwWGQTcZ5P2M6r68oBNOupIc820rtDIDOdNVSRMbwRQ3EQd6eFM9s4Z0QA2nWOLZDl84mc47jUjbx+Gt/4VhWblCM5/mI0pY7Wxja5VtoDqS29l5lQvD01znVnkjd5l+007LbLDob7lpS4EKQQSuUPnzeOnop1t3C2xhrTBrpcGGVzNsCG1TTd4DQnrT7ZGMsqbpe6EJKNmclSfOnKBxNRm29pJcTLazvbUjVUbKDqBLGAvHpWr9YnxXnXVY668tI76crdA4ufBZJ94FMUBDSQQNdCZPT40oEBrWT+03D19rOVCZ3KjgC8D0ZYPtpFLzndAADHXnJ6kmSTRFXuq2dnrVo4Z0LA3bzoioGGfKrIZA5cXMkRoOlMk+JbarWOwxtuycSp6RxAPD000us0HWpjtBhPJX2TXQKd5sx1UEy3M1D44btRr+k/2Qhna2dQ1m4z7s5m3MiCecWwSfzeNQAGgq37GNtFsO91lzqM0/ZzIwLBhqOnrqI20cGpy4fyj9GMhR6W1Pqq1IjtiBPrKK7ZUObMYBA3TlJDAjjHKlceoF1wDIDtrwnU6gGjdm7IbF2y8hBmzNqANxokjhrRMcwa47CILMRHCJPCl+E+m4GtTWytoWcOjQwd3+2UdWQHiqISRJ+8OWmlQ6ikI1qRamdpdp7jqQkqJETrGhGi8BAAHOr59F9td6TxtWjx5soY++s8wGy0dQzswBbgoHKRqTV52Xi7NtFRSQFiJ7gANZ6AeqpbzbPfizZL59XztHbAwt/8AI3uqhbNsm5eREhj5JANQBuopIk9NfTU/bxflEZc+dCDmXOdV57p5VXGUrduLh7Wc5YVFMcQsmVIPqM1nv7LGuM/G8pq4WW7ftMB+zwl0mDMlwh4+Ee2qjjNmXjDizcKlUIYIxUjIvBgPGpHZOEZmxKur2WSwzZEZhwyQjZyxKEHhNaT2eP7tZ/Ivuqc7etq3OecjG1w2+gcMIZWK5dTlMwQY0qc2b2c8reLoCM2p5Abx6Doa1muZR0rrjlbqGsbFCqBrp30KmdKFVFQ7dWM+BvjoFb+R1b3A1jyXTkC51AJgqqEtE6k8q3DtBZz4a8n3rdwenKYrJ8CrWBqwUTOViqa950aO4Gm4SaT2bs7eDW8LfvMDIZ/2aT1B51omytlEIrNZS25EuFC6H8/2vGqhie2Vzh5aO60g/U4HxqExvaR345n77js3qVYA9tS7Wpkadd2uloZTftLE6ee3HmFINVra/afDNpcK341Cm0hWeWj5m9lUrEYpmADQR0gKs/lUAH0zTTyhGghe5QB7quX9n5Roe29pPhUUL9VBb7COHdABIzCABM9KpuK2/eeRnyg8lGnqECokihkqfjP7Pyrt24WMsWY95gepae7Cwpu3ktoisXJAWF1ME8T4caX7PbH+s3ghJVIZncAHIoB1M6amB6andj7OOF2ratngH3TMnK8hC0CM0ET41cmYm+jbfwr4AJ5RAS4lVVhpH3iOHomq5c7QO5C5VVSQCOJgnXU93dWnfSphg2CzwCUuW4MagNKkT03hWNHTXpWfxkXa0rs5hMM1y6z27dwIqeTzDOqnPcOg4ajKdelT22bbYnDta3USRuqsDdII00il8NsS1h0DKyIjAEyAo1Ez7aZ39q2FMKxc/gGnrPwmrqM57RbIXDOqBi2ZQx7t4gfpNRflVEyasHa1Xv3vKAoiZFUF3jgWJ5T9rpVft4RCwRS94nj5NSqzyAZgSw74FWRDjCOjyWJRQJB4yeQirr9HvZS9evLiLivbsKrw0hWd4yjKpkgCSZI5VTMBZbyhQHyREgyScscQWjj31tfYG2bWDRTLEtcOcScwLtBaeenuqiG259H63nNy3iSCQN10mYETmBHuNUvbHYrEopCqjx9xxJ9DxWwbW2nat+e4BA80HX0gcPTWe7Y7cJJWypc90GPFvNHtrHXUnkaktnpjsTYBH1dHTVpLhl0EIdCeUdR3VNYnsLhiN0lD1zGAeu9xFSnZ3Bl7Vu+w33XNJMhc06KPAxNT9vCgEMRJ6nl4VZt+pcnxR8F2Jt2jObyjLvb6NHdIVgPYapG3D+83tI330AiN48jwrbb9xV4xWJdo3nFXyP8AuP8AqNKQwU601D71LodfTSn/AMRcnSD7PfUU8zOuHUpJbMeCyYlp09VTOzMOzmyCwJuDeEAFTlmD6e6u9ntivfRbWiFZYlvsiTqAOJ3hp31Z72wEW7hbIUuIYO0bxCquVnK8Cdda5XnZf/XWdZ/gxv7GZCAG18PiKPsRHS+2VgWAgkAmZ5Cf+aVY37MquqXLqeDkj1NNN+zOCAxN8OcxWJJABOvMDwqXjLMJ3somzUa5i7ygQwQB2PFpKkcOggeirjh7eRQvSq9sZR9exZHRB7B8qsc114njn3fSoNcmk81cL1tgtmoUhnoUDS8mZSOoI9YisAxKZSQeRI9WlegDWebb2BhbSXWZXN4vmXM0qQzk7qiBESNZiKDOeLBZ4kAekxUkmxuGZiSeEacuc0hjGXyiMFyheQAB0MiBT9b9+5GRMsHQt/v8qCPDaR1puwpe6hVoPEaHxFIPVRyKLSb3gKXwrLmm5CoNTx17pHCaCX7ObbGFa4+TOXTIBmygbwJJMHpUjsbabYnaC33Cg7jQnBQjprqZO6D8qg8TaF1ps28q5fOYhFMTJBY61ZOxWxkV3ueVzuiwyqIRM8HVjqTu93hWe7k2Nczaufa3E28Th3sFioYoc+gjI6toDxmI9NU/DbPwtrzLedvv3TmHoTh7BVibCJdcBl1IiRIbSSBI+NNMdsJ0IKNIPJ+P8wHhyrlOtm2vRzOJcsV3atm87l0uMZ+zoVHcobgO6oLEYq6uhvqDE7ideWcc/Cr2NnT5xyjopknxciPUPTUeOydlDndlAGqoWLH0KJj00n8vM8TvmWzDDZPZbOA7qzFgDLtJPflE+2pi52SPFHZBGu6sDwMho9FdxnaqzZAVSJAEAbzcOg4ek1Wsf2jxF7RdxerbzehfNWpL1bsZs5nlOb2yLNl2e47uBMMrKpYxplnNzp0e3F/yKWbK5FVcukqo9M5m49RVaFmTmYl26sST7amX2DfWw+JdCqIAZbdLSQoyqdTx48K6SXPaxsnyIy+Xumbrl/wjRP5Rx9Nce4iaaflH/NKYXcYzaDdHd86SQa1ZMN1uXZnGBcHYJ03BXMZtcnRahNgozYWz0yD3mnLYVhUvVSQndusdSTVT2h2dZ3d1fVmJgrpqZ4g1bDbPSjLb7qzpjPX7P30PmZhPFDPs41fti7GUAO4nuPD09alcLs0nVvVSz4d/R0rXoimLpiXuKAEdAobTSAg83l5pqWwOLCEDWTEniTp1ojWu6guHggj1VJ4X1MHGiNSKg+z2KBxOKbqw/U3ypRrBY6zRdmbMW2XdSQXMsSfE6eulttizyVIbLwyrexF0Ek3CsgkQInhpUpmqPwFvKNKeVuM0qWrhaiTXC1UHzUKRzd1dqaONVE7Q4V2vvmMqYgHkCFOnTWavZqE2vgwzs5kwk5Rzyg6TB91KKba2agM5RPIx8al7Gx3jMQEX7zkKPbx9FIYXbAdJtFLZHEQM4Peznh4EH3U3fHIjZ72JAP5i78OGnPv075rU5/aapG2rgS9cAIMO4DDhAYiRTS1s69cgqjx94jKvDUy3KrRittWs5fD4fOx/6lwASeumvrM1x9m47FjyhFzKo+whA/g6nw10q+LlzcQVzY6WwDiLqqYByJLNB1G8SF4dM1NMM5DqVALToGAIJOgBB051Zj5OyqqFzshaGuLLDMZIGbVddY6zUF9QfMCoiTxYEAHvJ09VS2RmQ6s7NxOJfKxzNxgHUCdRqdBVw2Hsa5hkyPGWTpIJnnqONM+zWBFpnu3Hm4pKgKZA0EnTiZJHrp3tTtRat6M4zfdG+/qHD01w7625PXfnmz2ppHyarpHOkdo7YULLlVUaz5o9ZNUbGdpb9zzECD7z6t6F4D21E3LeZs1xmuN1cyB4LwFc+f4+r9uNXrmfPVkx3a1TK2VL94lU/mOp9FVzE7VvXCud4BYgqm6OHA8z6a6W06CmlwAEMJ84euD8K68/x8xzvfVTZewiFLVuSQQbj6mPwD7PPXTjwqKuYxF0G8e7h66j79x2OpkDlwHdpSKca6YxrZPo3wtp8ML7W1NwOy5jrAEEZZ4ceVTPbhpwGIH4B7HU1B/Rc/7o46XW9qJU52tGbB315sjBRMSeQE86ow2lbYrl/DOvFGHfGldTlWVjYuySTg7B/B/cwqTbDE1Hdi9cFYP4W/W9WJFq4iPXATTuxgFXWJNPFFcNMhosVwrNGJrtUJG0K4bIPKlRQNA1vDKIFJl5hRwo16SaVw1isqWw6aUYmgvOuVpHTFFJrjGi0B81cpPNQoFSaZYm4oYAmDB5EzlifeK5Qqz6RV+0HZO1cLXkbyZVWZwAYOUSWEcD4CqFduoi/wCErMTOZiTHcBNChVavxdfowtpda4biLKBSpygxJObjMHhw76vd/G7zKgll85joq6fa0ltOg9IrtCpfi36ruK2rbBZiovP95lAReuVSJHDvPfWf7a25auFwq6mQSq5VBPIDjXaFebm3q+t9SSXEGb15lym4UT7q6E894jjRbdlE4DXrz9dChXaOZ1g8K91wiCWPeB7TRdsYVsPc8m0ZgFJI1G8JoUKIi3YniaO3mD8yn20KFCGt3n4/E0kFoUK2wvPYvtCuGstbJDtcaVUBpB4HMTCxAnQ1J7QxjXTLsT0HIeAoUKx03DBr6pJjMddOAHj1qsYu8rNIUAd3wFdoUhWu9hVnA2fB/wDUerKi0KFaQea4xoUKAUKFCgMBRXE0KFATyQoyGu0KDk0U1yhQFmis1ChWQXNXKFCg/9k=', // URL gambar untuk Ruang Kelas
    },
    // Tambahkan contoh ruangan lainnya jika diperlukan
  ];

   // Data fitur yang tersedia
   const features = [
    {
      title: 'Dapat Diakses Online',
      description: 'Lakukan peminjaman ruangan secara online dari mana saja.',
    },
    {
      title: 'Update Real-time',
      description: 'Informasi ketersediaan ruangan selalu diperbarui secara real-time.',
    },
    {
        title: 'Booking Ruangan',
        description: 'Melakukan booking pada ruangan tertentu.',
      },
    // Tambahkan fitur lainnya jika diperlukan
  ];

  // Data testimoni
  const testimonials = [
    {
      name: 'Mahasiswa 1',
      category: 'Mahasiswa',
      comment: 'Peminjaman ruangan di sini sangat memudahkan kami untuk mengadakan diskusi dan presentasi.',
    },
    {
        name: 'Mahasiswa 2',
        category: 'Mahasiswa',
        comment: 'Peminjaman ruangan di sini sangat memudahkan kami untuk mengadakan diskusi dan presentasi.',
      },
    {
      name: 'Dosen 1',
      category: 'Dosen',
      comment: 'Ruangan yang nyaman dan fasilitas yang lengkap membuat pengajaran kami lebih efisien.',
    },
    // Tambahkan testimoni lainnya jika diperlukan
  ];

  const [showToTopButton, setShowToTopButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 400) {
      setShowToTopButton(true);
    } else {
      setShowToTopButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div>
       <Helmet>
              <title>SIBor | Peminjaman Ruangan Lab Kelas Polibatam</title>
            </Helmet>
      {/* Navbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SiBor
          </Typography>
          <Button color="inherit">Beranda</Button>
          <Button color="inherit">Tentang Kami</Button>
          <Button color="inherit">Kontak</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography variant="h4" component="h1" gutterBottom mt={5}> 
          Selamat datang di Peminjaman Ruangan Polibatam.
        </Typography>
        <Typography variant="body1" paragraph>
          Di sini Anda dapat melakukan peminjaman ruangan kampus dengan mudah.
        </Typography>
        <Button href='/login' variant="contained" color="primary">
          Mulai Peminjaman
        </Button>
        

           {/* Fitur yang tersedia */}
           <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Typography variant="h5" gutterBottom>
            Fitur yang Tersedia
          </Typography>
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{feature.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>

        <Typography style={{ textAlign: 'center' }} variant="h5" gutterBottom mt={5}>
          Jenis-Jenis Ruangan
        </Typography>
        <Grid container spacing={2} mt={2}>
          {/* Card contoh ruangan */}
          {rooms.map((room, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <div style={{ overflow: 'hidden' }}>
                  <img
                    src={room.image}
                    alt={room.name}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
                <CardContent>
                  <Typography variant="h6">{room.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {room.description}
                  </Typography>
                  <Button href='/login' variant="outlined" color="primary">
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        

       {/* Testimoni */}
       <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Typography variant="h5" gutterBottom mt={5}>
            Testimoni Pengguna
          </Typography>
          <Grid container spacing={2}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="body2" gutterBottom>
                      "{testimonial.comment}"
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      - {testimonial.name}, {testimonial.category}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>

       
        {/* Kalender ketersediaan ruangan (seperti sebelumnya) */}
        
        {/* FAQ (Frequently Asked Questions) (seperti sebelumnya) */}
      </Container>

       {/* Tombol "Up to Top" */}
       {showToTopButton && (
        <Fab color="primary" size="small" aria-label="up to top" style={{ position: 'fixed', bottom: '20px', right: '20px' }} onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </Fab>
      )}

      {/* Footer */}
      <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Peminjaman Ruangan Kampus
        </Typography>
        <div>
          <Button color="primary">FAQ</Button>
          <Button color="primary">Kontak</Button>
          <Typography variant="body2" color="textSecondary">
            Alamat: Jalan Contoh No. 123, Kota Contoh
          </Typography>
        </div>
      </footer>
    </div>
  );
}

export default Home;
