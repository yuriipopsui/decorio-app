<<<<<<< HEAD
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
=======
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
}

export function cardSlideAnimation() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: -150,
<<<<<<< HEAD
=======

>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
<<<<<<< HEAD
    },
  };
  return cardVariants;
=======
    }
  };
  return cardVariants
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
}
export function cardSlideAnimationDelay() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: -150,
<<<<<<< HEAD
=======

>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
<<<<<<< HEAD
        delay: 0.4,
      },
    },
  };
  return cardVariants;
=======
        delay:0.4
      },
    }
  };
  return cardVariants
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
}
export function cardSlideAnimationRight() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: 150,
<<<<<<< HEAD
=======

>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
<<<<<<< HEAD
    },
  };
  return cardVariants;
=======
    }
  };
  return cardVariants
>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
}
export function cardSlideAnimationRightDelay() {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: 150,
<<<<<<< HEAD
=======

>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
<<<<<<< HEAD
        delay: 0.4,
      },
    },
  };
  return cardVariants;
}

export function countCartProductQuantity(products) {
  return products.reduce((total, product) => total + product?.quantity, 0);
}
=======
        delay:0.4
      },
    }
  };
  return cardVariants
}


export function countCartProductQuantity(products) {
  return products.reduce((total, product) => total + product?.quantity, 0)
}





>>>>>>> e8d6a32193b09e027a45e147f659d7c35aa60620
