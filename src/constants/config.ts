type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Maris Ibrahim — Open Hire Portfolio",
    fullName: "Maris Ibrahim",
    email: "mariezibrahim93@gmail.com",
  },
  hero: {
    name: "Maris Ibrahim",
    p: ["Open Hire Anytime — Full Stack Web Developer", "React / Next.js / Node.js / Website Systems"],
  },
  contact: {
    p: "Open Hire Anytime",
    h2: "Contact & Hiring.",
    form: {
      name: {
        span: "Nama",
        placeholder: "Nama Anda",
      },
      email: { span: "Email", placeholder: "Email Anda" },
      message: {
        span: "Kebutuhan Proyek",
        placeholder: "Jelaskan kebutuhan website / sistem Anda",
      },
    },
  },
  sections: {
    about: {
      p: "Profil Profesional",
      h2: "Tentang Saya.",
      content: `Saya adalah Full Stack Web Developer dengan pengalaman kerja sejak 2018 sampai sekarang.
      Fokus saya pada pengembangan website, landing page, dashboard, dan sistem bisnis berbasis web.
      Saya terbiasa mengubah kebutuhan bisnis menjadi solusi digital yang rapi, cepat, dan siap produksi.
      Siap bergabung untuk kebutuhan Open Hire, freelance, maupun kontrak project jangka panjang.`,
    },
    experience: {
      p: "Pengalaman Kerja 2018 - Sekarang",
      h2: "Riwayat Profesional.",
    },
    feedbacks: {
      p: "Alasan Hire",
      h2: "Kenapa Bekerja dengan Saya.",
    },
    works: {
      p: "Project Portfolio",
      h2: "Project & Framework.",
      content: `Setiap project menampilkan kegunaan bisnis dan base framework yang dipakai.
      Fokus saya adalah membangun produk web yang mudah digunakan, mudah dikembangkan,
      dan mendukung target operasional maupun pemasaran perusahaan.`,
    },
  },
};
