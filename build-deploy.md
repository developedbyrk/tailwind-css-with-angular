## Add baseHref in angular.json to Build your project
"configurations": {
  "production": {
    "baseHref": "/tailwind-css-with-angular/",  // <-- This line is important
    "budgets": []
  }
}

## Build or Rebuild the project
ng build --configuration production

## Deploy or Deploy it again to Github pages
ngh --dir=dist/tailwind-css-with-angular