import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'gdfosg9u',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skD2OsenXvkAzu8FR9S4PUPuFBM9Hk7gBGNoFOv4WB6gIC8Sf1MvVWNOxHpBOiMj5z19zas62J9V8XExG2xqCpY6KIyRF8GyxSsbqONsNIoA9VSsIH1aoHBImgqSTEpMFinEhvAN4d4MK3PS7bEnzjk6cw1OKgyRFnPeds3LvyQV3UKLTjnm',
  useCdn: false,
})