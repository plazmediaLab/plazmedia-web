const repos = [
  {
    repo_slug: 'spotify-electron',
    title: 'Clon spotify (Desktop app)',
    stack: ['rc', 'tw', 'el', 'fb'],
    screenshot:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fscreen-1.jpg?alt=media&token=6b539124-53fe-4e17-8b9a-0017e7a810b0',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-screen-1.jpg?alt=media&token=2f667eac-24f8-4edf-8645-634410b79cbe',
    url: 'https://github.com/plazmediaLab/spotify-electron',
    visit: '',
    download: ''
  },
  {
    repo_slug: 'plazmedia-web',
    title: 'CV Web (Portafolio)',
    stack: ['nx', 'tw', 'st'],
    screenshot:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fplazmedia-web.png?alt=media&token=88ca357a-608c-487b-a640-f8acfac3ae09',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-plazmedia-web.png?alt=media&token=aeb1b3bc-913b-40fd-ac93-df0362900c2b',
    url: 'https://github.com/plazmediaLab/plazmediaWEB',
    visit: 'https://plazmedia-web.vercel.app/'
  },
  {
    repo_slug: 'alain-boutique-client',
    title: 'Alain Boutique v2 Cliente (FrontEnd)',
    stack: ['nx', 'tw', 'jw'],
    screenshot:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Falain-boutique-v2.png?alt=media&token=bfd6c8f4-c3a7-499d-bfff-778c45665a7e',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-alain-boutique-v2.png?alt=media&token=90950080-3d10-4009-87ac-eed898e702a6',
    url: 'https://github.com/plazmediaLab/alain-boutique-client',
    visit: 'https://alain-boutique-client.plazmedia.vercel.app/'
  },
  {
    repo_slug: 'alain-boutique-api',
    title: 'Alain Boutique v2 API (BackEnd)',
    stack: ['nd', 'ex', 'mg', 'jw'],
    screenshot:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Falain-boutique-api.png?alt=media&token=7027d7cd-f8c1-4fcb-bb78-79bea491cc1b',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-alain-boutique-api.png?alt=media&token=1c1215be-32e3-43f2-8f92-faf0608951ed',
    url: 'https://github.com/plazmediaLab/alain-boutique-api',
    visit: ''
  },
  {
    repo_slug: 'grupo-torres',
    title: 'Gruppo Torres (Bienes raíces)',
    stack: ['nx', 'tw'],
    screenshot:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fgrupo-torres.png?alt=media&token=c1cdde68-f561-463d-b394-8455ce885581',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-grupo-torres.png?alt=media&token=9a9b9ef0-73e6-4666-b851-8fbb1ded59e2',
    url: 'https://github.com/plazmediaLab/grupo-torres',
    visit: 'https://grupo-torres.vercel.app/'
  },
  {
    repo_slug: 'alain-boutique',
    title: 'Alain Boutique v1',
    stack: ['gb', 'tw', 'fb'],
    screenshot:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Falain-boutique-v1.png?alt=media&token=1b6e2645-67fa-4c64-b3d9-015e8849e3ce',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-alain-boutique-v1.png?alt=media&token=dd65c21a-ed59-4a2a-b117-cb667e22cb4d',
    url: 'https://github.com/plazmediaLab/alain-boutique',
    visit: 'https://alain-boutique.plazmedia.vercel.app/'
  }
];

export default function projects(req, res) {
  res.status(200).send(repos);
}
