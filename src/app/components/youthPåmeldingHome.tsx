import Link from 'next/link';

export default function PaameldingHome() {
  return (
    <main>
      <section className='flex justify-center items-center py-[150px] px-[25px]'>
        <div className='w-full max-w-[1325px] flex flex-col'>
          <h1
            className='primaryFontRegular text-slate-50 font-[600] my-5 leading-[84px] flex items-center gap-5'
            style={{ fontSize: 'clamp(36px, 12vw, 80px)' }}
          >
            Påmelding
            <span className='Kelsi-fill text-slate-50'>x</span>
          </h1>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLSesbn9kHSXX_Yb5uK5ovpKd9xiZ57p5DGpClDozOTZma3ZgrQ/viewform'>
            <div className='påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-3 hover:px-8 duration-150 ease-in-out'>
              <h1 className='påmeldingTitle  primaryFontRegular font-[600] text-slate-50 text-[25px] uppercase'>
                Connect
              </h1>
              <div className='cursor-pointer bg-[#222] p-[10px] rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                >
                  <g clip-path='url(#clip0_1_20)'>
                    <path
                      d='M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666'
                      stroke='white'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_20'>
                      <rect width='15' height='15' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </Link>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLSdDbsu-p-7rR353roJfZuUF-l8oNqjkdHXiT8WY2y9E3kZ7Bw/viewform'>
            <div className='påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-3 hover:px-8 duration-150 ease-in-out'>
              <h1 className='påmeldingTitle  primaryFontRegular font-[600] text-slate-50 text-[25px] uppercase'>
                Bibelstudie
              </h1>
              <div className='cursor-pointer bg-[#222] p-[10px] rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                >
                  <g clip-path='url(#clip0_1_20)'>
                    <path
                      d='M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666'
                      stroke='white'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_20'>
                      <rect width='15' height='15' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </Link>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLSerL_wsSXphDQfwW-WZY9al7T8Ply6C9yRb-DSES4a2Ds0dfA/viewform'>
            <div className='påmeldingHome flex justify-between items-center bg-[#141414] px-10 py-14 rounded-[28px] my-3 hover:px-8 duration-150 ease-in-out'>
              <h1 className='påmeldingTitle  primaryFontRegular font-[600] text-slate-50 text-[25px] uppercase'>
                Tjenestekurs
              </h1>
              <div className='cursor-pointer bg-[#222] p-[10px] rounded-full'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='15'
                  height='15'
                  viewBox='0 0 15 15'
                  fill='none'
                >
                  <g clip-path='url(#clip0_1_20)'>
                    <path
                      d='M0.789551 0.78949L14.2106 14.2105M14.2106 14.2105V2.38659M14.2106 14.2105H2.38666'
                      stroke='white'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_1_20'>
                      <rect width='15' height='15' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </Link>
          <div className='påmeldingHomeInfoContainer flex gap-16 justify-between items-center my-14'>
            <p
              className='primaryFontRegular text-slate-50 max-w-[600px]'
              style={{ fontSize: 'clamp(14px, 4vw, 22px)' }}
            >
              Trykk på &rdquo; Alle påmeldinger &rdquo; for og hente fram flere påmeldinger du
              kan melde deg på.
            </p>
            <Link href='/youthForms'>
              <button className='btn btn-wide rounded-full bg-[#2b80ff] text-slate-50 border-none hover:bg-[#3e8bff]'>
                Alle påmeldinger
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
