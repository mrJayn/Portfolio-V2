export const srConfig = {
    delay: 250,
    duration: 500,
    distance: '50px',
    origin: 'bottom',
    reset: false,
    mobile: true,
    viewFactor: 0.25,
    useDelay: 'always',
    easing: 'ease-out',
}

/** 
 *   useEffect(() => {
    async function animate() {
      if (sr_container.current) {
        const sr = (await import("scrollreveal")).default;
        sr().reveal(sr_container.current);
      }
    }
  });

 * **/
