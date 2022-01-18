import components from "./components";
export default{
  install(app){
    components.forEach(v => app.component(v.name,v))
  }
}