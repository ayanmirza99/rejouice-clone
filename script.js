const locomotive = function () {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
};
locomotive();

const loader = function () {
  const tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 40,
    delay: 0.5,
    duration: 1,
    stagger: 0.1,
    opacity: 0,
  });

  tl.to("#loader h3", {
    x: -20,
    stagger: 0.1,
    duration: 1,
    opacity: 0,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 1,
    zIndex: 0,
  });
};
loader();

const page1Animation = function () {
  const page1Content = document.querySelector("#page1-content");

  page1Content.addEventListener("mousemove", (e) => {
    gsap.to("#cursor", {
      x: e.x,
      y: e.y,
    });
  });
  page1Content.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      scale: 1,
      duration: 0.5,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      scale: 0,
      duration: 0.5,
    });
  });
};
page1Animation();

const page2Animation = function () {
  gsap.from(".elem1 h1", {
    y: 100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 80%",
      end: "top 79%",
      scrub: 3,
    },
  });
  gsap.from("#underline1", {
    scale: 0,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 75%%",
      end: "top 65%",
      scrub: 3,
    },
  });

  gsap.from(".elem2 span", {
    opacity: 0,
    stagger: 0.2,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 50%",
      end: "top 40%",
      toggleActions: "play none none reverse",
      scrub: 5,
    },
  });
};
page2Animation();

const page4Animation = function () {
  gsap.from(".elem4 h1", {
    y: 100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 75%",
      end: "top 73%",
      scrub: 3,
    },
  });
  gsap.from("#underline3", {
    scale: 0,
    scrollTrigger: {
      trigger: "#video-bottom",
      scroller: "#main",
      start: "top 70%%",
      end: "top 65%",
      scrub: 3,
    },
  });
  gsap.from(".elem4 span", {
    opacity: 0,
    stagger: 0.4,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 50%",
      end: "top 40%",
      toggleActions: "play none none reverse",
      scrub: 5,
    },
  });
  gsap.from(".elem5 span", {
    opacity: 0,
    stagger: 0.4,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#video",
      scroller: "#main",
      start: "top -10%",
      toggleActions: "play none none reverse",
      scrub: 5,
    },
  });

  const page4Video = document.querySelector("#video");

  page4Video.addEventListener("mousemove", (e) => {
    gsap.to("#cursor2", {
      x: e.x,
      y: e.y,
    });
  });
  page4Video.addEventListener("mouseenter", function (e) {
    gsap.to("#cursor2", {
      scale: 1,
      duration: 0.5,
      stagger: 0.5,
    });
  });
  page4Video.addEventListener("mouseleave", function () {
    gsap.to("#cursor2", {
      scale: 0,
      duration: 0.5,
      stagger: 0.5,
    });
  });

  gsap.to("#svg", {
    rotate: "260deg",
    duration: 1.7,
    scrollTrigger: {
      trigger: "#video",
      scroller: "#main",
      start: "top 20%",
    },
  });

  gsap.to("#seats", {
    y: "-395%",
    duration: 1.7,
    scrollTrigger: {
      trigger: "#video",
      scroller: "#main",
      start: "top 20%",
    },
  });

  gsap.from(".elem5 h1", {
    y: 100,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#video-bottom",
      scroller: "#main",
      start: "top 75%",
      end: "top 73%",
      scrub: 3,
    },
  });
  gsap.from("#underline2", {
    scale: 0,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 70%%",
      end: "top 65%",
      scrub: 3,
    },
  });
};
page4Animation();

const swiperAnimation = function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: true,
    },
    freeMode: true,
    grabCursor: true,
    speed: 2000,
  });
};
swiperAnimation();

const page6Animation = function () {
  gsap.to("#page6 h1", {
    transform: "translateX(-90%)",
    delay: 1,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 0",
      end: "top -200%",
      scrub: 3,
      pin: true,
    },
  });
};
page6Animation();

const page7Animation = function () {
  gsap.to("#page7", {
    transform: "translateY(-100vh)",
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      pin: true,
      scrub: 5,
    },
    onComplete: function () {
      gsap.set("#page7", { height: 0 });
    },
  });

  gsap.from("#page7Top", {
    y: -350,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      end: "top 50%",
      scrub: 3,
    },
  });

  let logo = new SplitType("#page7Logo");
  gsap.from(logo.chars, {
    y: "-100%",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page7Bottom",
      scroller: "#main",
      start: "top 90%",
      end: "top 80%",
      scrub: 5,
    },
  });
};
page7Animation();

const dropdownAnimation = function () {
  const menuBtn = document.querySelector("#menuBtn");
  const menuBtnContent = document.querySelector("#menuBtn h1");
  const menuUnderline = document.querySelector("#menu-underline");
  const headerLogo = document.querySelector("#headerLogo");
  const dropdown = document.querySelector("#dropdown");
  const dropdownVideo = document.querySelector("#dropdownVideo video");

  dropdown.style.top = "-100%";
  let open = true;
  const handleClick = () => {
    if (open) {
      gsap.to(dropdown, {
        top: 0,
        duration: 1,
      });
      menuBtnContent.textContent = "Close";
      menuBtnContent.style.color = "#000";
      menuUnderline.style.backgroundColor = "#000";
      headerLogo.textContent = "rejouice";
      headerLogo.style.color = "#000";
      headerLogo.style.fontSize = "4vw";
      headerLogo.style.fontFamily = "Heading";

      gsap.from(dropdownVideo, {
        scale: 0,
        duration: 0.6,
        delay: 0.6,
      });

      gsap.from("#navLinks", {
        transform: "translateY(100%)",
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
      });
    } else {
      gsap.to(dropdown, {
        top: "-100%",
        duration: 1.5,
      });

      menuBtnContent.textContent = "Menu";
      menuBtnContent.style.color = "#fff";
      menuUnderline.style.backgroundColor = "#fff";
      headerLogo.textContent = "The Veture Agency.";
      headerLogo.style.fontSize = "3vw";
      headerLogo.style.color = "#fff";
    }
    open = !open;
  };

  menuBtn.addEventListener("click", handleClick);
};
dropdownAnimation();
