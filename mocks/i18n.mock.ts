export const mockStrings = {
  en: {
    'Employee Manager': 'Employee Manager',
    'New Employee': 'New Employee',
    'First Name': 'First Name',
    'Last Name': 'Last Name',
    'Email': 'Email',
    'Phone Number': 'Phone Number',
    'Department': 'Department',
    'Position': 'Position'
  },
  tr: {
    'Employee Manager': 'Çalışan Yönetimi',
    'New Employee': 'Yeni Çalışan',
    'First Name': 'Ad',
    'Last Name': 'Soyad',
    'Email': 'E-posta',
    'Phone Number': 'Telefon',
    'Department': 'Departman',
    'Position': 'Pozisyon'
  }
};

export const mockLocalization = {
  getLocale: () => 'en',
  setLocale: async (locale: 'en' | 'tr') => mockStrings[locale]
}; 