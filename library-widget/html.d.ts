// Allows ts to load html without throwing error
declare module "*.html" {
  const content: string;
  export default content;
}
