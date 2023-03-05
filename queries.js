import { gql } from "graphql-request";
export const addReply = async (obj) => {
  const result = await fetch("/api/sheet", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
};
export const getTestimonies = gql`
  query getTestimonies {
    testimonies {
      name
      text
      pic {
        url
      }
    }
  }
`;
export const getAllStudents = gql`
  query getTestimonies {
    formationTestimonies {
      name
      temoignage
      graduationYear
      image {
        url
        width
        height
      }
      formation {
        slug
        title
      }
    }
  }
`;
export const getAllFormations = gql`
  query Assets {
    formations {
      slug
      title
      type
      testimonies {
        name
        temoignage
        graduationYear
        image {
          url
          width
          height
        }
      }
      prerequis {
        text
      }
      shortDescription
      coverPicture {
        url
        width
        height
      }
    }
  }
`;
export const getHomeCourses = gql`
  query Assets {
    formations(first: 5, where: { homeCourse: true }) {
      slug
      title
      type
      shortDescription
      coverPicture {
        url
        width
        height
      }
    }
  }
`;
export function avoidRateLimit(delay = 500) {
  if (!process.env.IS_BUILD) {
    return;
  }

  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
export const getFormationDetails = gql`
  query Assets($slug: String!) {
    formation(where: { slug: $slug }) {
      type
      title
      slug
      testimonies {
        name
        temoignage
        graduationYear
        image {
          url
          width
          height
        }
      }
      prerequis {
        text
      }
      plan {
        text
      }
      extraPictures {
        url
        width
        height
      }
      durations {
        text
      }
      description
      coverPicture {
        url
        width
        height
      }
      objectif
      shortDescription
    }
  }
`;
