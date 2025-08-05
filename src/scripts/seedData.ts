import { createClient } from '@supabase/supabase-js';
import type { TablesInsert } from '@/integrations/supabase/types';

const supabaseUrl = "https://ixqjqjqjqjqjqjqjqjqj.supabase.co";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "your-service-role-key-here";

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

const coursesData: TablesInsert<'courses'>[] = [
  {
    slug: 'flutter-development',
    title: 'تطوير تطبيقات Flutter',
    description: 'تعلم تطوير تطبيقات الجوال متعددة المنصات باستخدام Flutter وDart من الصفر حتى الاحتراف. ستتعلم كيفية بناء تطبيقات جميلة وسريعة تعمل على Android وiOS بكود واحد.',
    short_description: 'تطوير تطبيقات جوال احترافية بـ Flutter',
    what_you_learn: [
      'أساسيات لغة Dart',
      'بناء واجهات المستخدم بـ Flutter',
      'إدارة الحالة (State Management)',
      'التعامل مع قواعد البيانات',
      'نشر التطبيقات على المتاجر',
      'أفضل الممارسات في التطوير'
    ],
    target_audience: [
      'المبتدئين في البرمجة',
      'مطوري الويب الراغبين في تعلم تطوير الجوال',
      'الطلاب والخريجين',
      'المهتمين بتطوير التطبيقات'
    ],
    duration: '3 شهور',
    modules_count: 8,
    lessons_count: 32,
    difficulty_level: 'Beginner',
    category: 'Mobile Development',
    image_url: '/images/flutter-course.jpg'
  },
  {
    slug: 'frontend-development',
    title: 'تطوير الواجهة الأمامية',
    description: 'احترف تطوير المواقع التفاعلية الحديثة باستخدام HTML5, CSS3, JavaScript وReact. تعلم كيفية بناء مواقع سريعة ومتجاوبة مع جميع الأجهزة.',
    short_description: 'تطوير مواقع تفاعلية حديثة',
    what_you_learn: [
      'HTML5 و CSS3 المتقدم',
      'JavaScript الحديث (ES6+)',
      'React و مكتباته',
      'التصميم المتجاوب',
      'أدوات التطوير الحديثة',
      'نشر المواقع'
    ],
    target_audience: [
      'المبتدئين في تطوير الويب',
      'المصممين الراغبين في تعلم البرمجة',
      'الطلاب والخريجين',
      'المطورين الراغبين في تحديث مهاراتهم'
    ],
    duration: '4 شهور',
    modules_count: 10,
    lessons_count: 40,
    difficulty_level: 'Beginner',
    category: 'Web Development',
    image_url: '/images/frontend-course.jpg'
  },
  {
    slug: 'python-server',
    title: 'برمجة الخوادم بـ Python',
    description: 'تعلم تطوير الخوادم والـ APIs القوية باستخدام Python وDjango. ستتعلم كيفية بناء تطبيقات ويب متكاملة وآمنة.',
    short_description: 'تطوير خوادم وAPIs احترافية',
    what_you_learn: [
      'أساسيات Python المتقدمة',
      'Django Framework',
      'تصميم وبناء APIs',
      'قواعد البيانات والـ ORM',
      'الأمان والحماية',
      'نشر التطبيقات'
    ],
    target_audience: [
      'المطورين المبتدئين',
      'مطوري الواجهة الأمامية',
      'الطلاب والخريجين',
      'المهتمين بتطوير الخوادم'
    ],
    duration: '3.5 شهر',
    modules_count: 9,
    lessons_count: 36,
    difficulty_level: 'Intermediate',
    category: 'Backend Development',
    image_url: '/images/python-course.jpg'
  },
  {
    slug: 'csharp-dotnet',
    title: 'برمجة C# و .NET',
    description: 'احترف تطوير التطبيقات القوية باستخدام C# و .NET Framework. تعلم بناء تطبيقات سطح المكتب والويب الاحترافية.',
    short_description: 'تطوير تطبيقات سطح المكتب والويب',
    what_you_learn: [
      'أساسيات C# المتقدمة',
      '.NET Framework و .NET Core',
      'تطوير تطبيقات Windows Forms',
      'ASP.NET لتطوير الويب',
      'Entity Framework',
      'أفضل الممارسات'
    ],
    target_audience: [
      'المطورين المبتدئين',
      'مطوري Java الراغبين في التحول',
      'الطلاب والخريجين',
      'المهتمين بتطوير تطبيقات Microsoft'
    ],
    duration: '4 شهور',
    modules_count: 11,
    lessons_count: 44,
    difficulty_level: 'Intermediate',
    category: 'Desktop & Web Development',
    image_url: '/images/csharp-course.jpg'
  }
];

const testimonialsData: TablesInsert<'testimonials'>[] = [
  {
    name: 'سارة عبد الله',
    role: 'مصممة مواقع في شركة كبيرة',
    course: 'تطوير الويب - الواجهة الأمامية',
    rating: 5,
    testimonial: 'بصراحة أنا مكنتش أعرف أي حاجة عن البرمجة، وكنت دايمًا حاسة إن المجال صعب عليّا. لما بدأت الكورس مع PR TEC، كل حاجة اتغيرت. الشرح كان بسيط جدًا، وكل درس ليه تطبيق عملي. بعد ما خلصت الكورس، قدرت أشتغل في شركة كويسة، وبقيت فخورة بنفسي جدًا.',
    outcome: 'اتوظفت بعد الكورس بـ 3 شهور'
  },
  {
    name: 'محمد كمال',
    role: 'مبرمج تطبيقات فريلانسر',
    course: 'تطوير Flutter',
    rating: 5,
    testimonial: 'أنا كنت شغال شغل مش متعلق بالتقنية خالص، وكنت نفسي أتعلم حاجة ليها مستقبل. دخلت كورس Flutter وأنا مش عارف حاجة، بس الطريقة اللي بيشرحوا بيها خلتني أحب المجال. دلوقتي بشتغل فريلانس وبعمل تطبيقات للناس من البيت!',
    outcome: 'عمل 3 تطبيقات وبقى شغال فريلانسر'
  },
  {
    name: 'أحمد فوزي',
    role: 'مطور Full-Stack',
    course: 'برمجة الخوادم',
    rating: 5,
    testimonial: 'الكورس ده حرفيًا غير حياتي. كنت فاكر بايثون وDjango صعبين، لكن المنهج كان منظم والمدرب فاهم بيعمل إيه. كمان ساعدوني أظبط الـ CV وأتقدم على شغل. الحمد لله دلوقتي مرتبي زاد والفرص بقت أكتر.',
    outcome: 'مرتب أعلى 3 مرات بعد الكورس'
  },
  {
    name: 'كريم ياسر',
    role: 'طالب عنده 12 سنة',
    course: 'برمجة للأطفال',
    rating: 5,
    testimonial: 'أنا كنت بحب الألعاب، لكن دلوقتي بقيت بعمل ألعاب بنفسي! الكورس ممتع جدًا، وكنت بستنى الحصة كل أسبوع. عملت أكتر من لعبة ووريتهم لصحابي، وكلهم انبهروا بيا. نفسي أكبر وأشتغل مطور ألعاب.',
    outcome: 'عمل 5 ألعاب وبيتعلم بايثون دلوقتي'
  },
  {
    name: 'مي خالد',
    role: 'غيرت مساري المهني',
    course: 'أساسيات البرمجة',
    rating: 5,
    testimonial: 'أنا عندي 35 سنة وكنت فاكرة خلاص فاتني قطار البرمجة. بس لما بدأت مع PR TEC حسيت إني في بيئة بتشجعني، والمدرب ما كانش بيتأخر عن أي سؤال. دلوقتي بقيت فاهمة أكتب كود، وفكرت أكمّل وأتخصص.',
    outcome: 'حولت من التدريس لمجال البرمجة'
  },
  {
    name: 'شريف حسن',
    role: 'مؤسس شركة ناشئة',
    course: 'باقة Full-Stack',
    rating: 5,
    testimonial: 'كنت محتاج أعمل نسخة أولى من تطبيقي بسرعة، وملقتش أفضل من PR TEC. الكورسات مكثفة وعملية، وكل حاجة محتاجها موجودة. وفرت عليا وقت كتير وبنيت المشروع بنفسي.',
    outcome: 'أسس شركته وجمع تمويل 500 ألف دولار'
  }
];

export async function seedCourses() {
  try {
    console.log('Seeding courses...');
    
    const { data: existingCourses } = await supabase
      .from('courses')
      .select('id')
      .limit(1);
    
    if (existingCourses && existingCourses.length > 0) {
      console.log('Courses already exist, skipping...');
      return;
    }
    
    const { data, error } = await supabase
      .from('courses')
      .insert(coursesData)
      .select();
    
    if (error) {
      console.error('Error seeding courses:', error);
      throw error;
    }
    
    console.log('Successfully seeded courses:', data?.length);
    return data;
  } catch (error) {
    console.error('Failed to seed courses:', error);
    throw error;
  }
}

export async function seedTestimonials() {
  try {
    console.log('Seeding testimonials...');
    
    const { data: existingTestimonials } = await supabase
      .from('testimonials')
      .select('id')
      .limit(1);
    
    if (existingTestimonials && existingTestimonials.length > 0) {
      console.log('Testimonials already exist, skipping...');
      return;
    }
    
    const { data, error } = await supabase
      .from('testimonials')
      .insert(testimonialsData)
      .select();
    
    if (error) {
      console.error('Error seeding testimonials:', error);
      throw error;
    }
    
    console.log('Successfully seeded testimonials:', data?.length);
    return data;
  } catch (error) {
    console.error('Failed to seed testimonials:', error);
    throw error;
  }
}

export async function seedAllData() {
  try {
    console.log('Starting data seeding...');
    
    await seedCourses();
    await seedTestimonials();
    
    console.log('All data seeded successfully!');
  } catch (error) {
    console.error('Failed to seed data:', error);
    throw error;
  }
}

if (typeof window === 'undefined') {
  seedAllData().catch(console.error);
}
