const route = (r, data) => {
    const paths = r.split("/");
  
    paths.forEach((path, i) => {
      if (path.charAt(0) === ":") {
        paths[i] = data[path.replace(":", "")];
      }
    });
  
    return paths.join("/");
  };
  
  export default route;
  