const repos = [
  {
    repo_slug: 'spotify-electron',
    title: 'Clon spotify (Desktop app)',
    stack: ['rc', 'tw', 'el', 'fb'],
    screenshot: '',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-screen-1.jpg?alt=media&token=2f667eac-24f8-4edf-8645-634410b79cbe',
    url: 'https://github.com/plazmediaLab/spotify-electron',
    visit: ''
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
    screenshot: '',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-alain-boutique-v2.png?alt=media&token=90950080-3d10-4009-87ac-eed898e702a6',
    url: 'https://github.com/plazmediaLab/alain-boutique-client',
    visit: 'https://alain-boutique-client.plazmedia.vercel.app/'
  },
  {
    repo_slug: 'alain-boutique-api',
    title: 'Alain Boutique v2 API (BackEnd)',
    stack: ['nd', 'ex', 'mg', 'jw'],
    screenshot: '',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-alain-boutique-api.png?alt=media&token=1c1215be-32e3-43f2-8f92-faf0608951ed',
    url: 'https://github.com/plazmediaLab/alain-boutique-api',
    visit: ''
  },
  {
    repo_slug: 'grupo-torres',
    title: 'Gruppo Torres (Bienes raíces)',
    stack: ['nx', 'tw'],
    screenshot: '',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-grupo-torres.png?alt=media&token=9a9b9ef0-73e6-4666-b851-8fbb1ded59e2',
    url: 'https://github.com/plazmediaLab/grupo-torres',
    visit: 'https://grupo-torres.vercel.app/'
  },
  {
    repo_slug: 'alain-boutique',
    title: 'Alain Boutique v1',
    stack: ['gb', 'tw', 'fb'],
    screenshot: '',
    thumbnail:
      'https://firebasestorage.googleapis.com/v0/b/platify-electron-28b95.appspot.com/o/screenshots%2Fthumbnail-alain-boutique-v1.png?alt=media&token=dd65c21a-ed59-4a2a-b117-cb667e22cb4d',
    url: 'https://github.com/plazmediaLab/alain-boutique',
    visit: 'https://alain-boutique.plazmedia.vercel.app/'
  }
];

export default function projects(req, res) {
  res.status(200).send(repos);
}
