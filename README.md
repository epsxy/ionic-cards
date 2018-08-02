# Ionic Cards

Cards list with Ionic 2

## Issues 

Sometimes, it seems like VSCode is changing import in the following way:

```ts
- import { Platform } from 'ionic-angular';
+ import { Platform } from 'ionic-angular/umd';
```

`/umd` parts needs to be removed from all the imports because it will cause the following Runtime error: `Cannot find module "."`. You can find those wrong imports by running `git grep '/umd'`.

I actually don't know why is it happening, but it looks related to this current issue in [TypeScript Github repository](https://github.com/Microsoft/TypeScript/issues/25204).


## License

The MIT License