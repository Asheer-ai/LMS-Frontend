# LMS Frontend

### Set instruction

1.Clone the project

```bash
    git clone https://github.com/Asheer-ai/LMS-Frontend.git
```
2.Move into the directory
```bash
    cd Lms-Frontend
```
3.install deoendencies

```bash
    npm i
```
4.run the server

```bash
    npm run dev
```


### Setup instruction for tailwind

[Tailwind official instruction doc](https://tailwindcss.com/docs/installation)

1.Install tailwindcss

```bash
npm install -D tailwindcss
```

2.Create  tailwind config file

```bash
npx tailwindcss init
```
3.Add file extensions to tailwind config file in the contents property

```bash
 content: ["./src/**/*.{html,js}"],
 ```

 4.Add the tailwind directives at the top of the `index.css` file

 ```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```