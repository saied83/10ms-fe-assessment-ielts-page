export interface FetchProductResponse {
  code: number;
  data: ProductData;

  message: string;

  status_code: number;
}

export interface ProductData {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Medum[];
  checklist: Checklist[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;

  delivery_method: string;
}

export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

export interface Medum {
  name: string;
  resource_type: SingleMediaType;
  resource_value: string;
  thumbnail_url?: string;
}

export type SingleMediaType = "video" | "image";

export interface Checklist {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface Seo {
  defaultMeta: DefaultMeum[];
  description: string;
  keywords: string[];
  schema: Schema[];
  title: string;
}

export interface DefaultMeum {
  content: string;
  type: string;
  value: string;
}

export interface Schema {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: Value[];
}

export interface Value {
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  id?: string;
  start_at?: string;
  template?: string;
  text?: string;
  description?: string;
  has_instructor_page?: boolean;
  image?: string;
  name?: string;
  short_description?: string;
  slug?: string;
  icon?: string;
  subtitle?: string;
  title?: string;
  background?: Background;
  cta?: Cta;
  description_color?: string;
  thumbnail?: string;
  title_color?: string;
  top_left_icon_img?: string;
  color?: string;
  checklist?: string[];
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;
  profile_image?: string;
  testimonial?: string;
  thumb?: string;
  video_type?: string;
  video_url?: string;
  answer?: string;
  question?: string;
}

export interface Background {
  image: string;
  primary_color: string;
  secondary_color: string;
}

export interface Cta {
  clicked_url: string;
  color: string;
  text: string;
}
