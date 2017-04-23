#Narrative Meta to EXIF

To set EXIF metadata on downloaded Narrative Clip photos

Will grab corresponding JSON files for each JPEG and write the EXIF

##Installation

Make sure you download and install [NodeJs](https://nodejs.org/en/download/)

```
npm install
```

```
npm link
```

##Running

Specify the corresponding photo directory and meta directory, the script will run through each and set the date times

```
nm2e --photo <path> --meta <path>
```

##Info

I created this because I needed it, hopefully it helps someone else 😇

If anyone has an idea of what other useful exif data I can extract please let me know

## Built Using

- [commander](https://github.com/tj/commander.js): to easily create the cli
- [node-exiftool](https://github.com/Sobesednik/node-exiftool): to make the exif stuff easy
- babel: Babel
- eslint: An AST-based pattern checker for JavaScript.
- [eslint-config-airbnb](https://github.com/airbnb/javascript): Airbnb&#39;s ESLint config & styleguide


## License

MIT