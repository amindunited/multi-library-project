# set up repositiory
git init

# set up npm
npm init

# create an angular app
ng new library-app

# create library-widget app
mkdir library-widget && cd $_
npm init

# typescript
npm install typescript tslint --save-dev

# webpack
# extract-text-webpack-plugin@next is @next because of a breaking change in webpack 4
npm install webpack webpack-cli webpack-dev-server autoprefixer awesome-typescript-loader css-loader extract-text-webpack-plugin@next html-webpack-plugin node-sass postcss-loader raw-loader sass-loader style-loader --save-dev

# jest (unit testing)
npm install jest ts-jest @types/jest --save-dev


