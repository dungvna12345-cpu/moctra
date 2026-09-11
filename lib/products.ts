export type ProductKind = 'tea' | 'snack' | 'teaware' | 'packaging' | 'combo';

export type Product = {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number;
  image: string;
  kind: ProductKind;
  hidePrice?: boolean;
};

const A='/assets/menu/';
const P=(slug:string,name:string,category:string,categoryLabel:string,price:number,image:string,kind:ProductKind='tea',hidePrice=false):Product=>({slug,name,category,categoryLabel,price,image:A+image,kind,hidePrice});

export const products:Product[]=[
  P('tra-o-long-dai-loan','Trà Ô Long Đài Loan','tra-o-long','trà ô long',100000,'oolong-taiwan.png'),
  P('tra-o-long-viet-nam','Trà Ô Long Việt Nam','tra-o-long','trà ô long',100000,'oolong-vietnam.png'),
  P('tra-o-long-nhan-sam','Trà Ô Long Nhân Sâm','tra-o-long','trà ô long',100000,'oolong-ginseng.png'),

  P('tra-tan-cuong','Trà Tân Cương','tra-tan-cuong','trà tân cương',100000,'tan-cuong.png'),
  P('tra-shan-tuyet-co-thu','Trà Shan Tuyết Cổ Thụ','tra-tan-cuong','trà tân cương',100000,'shan-tuyet.png'),
  P('tra-uop-hoa-nhai','Trà Ướp Hoa Nhài','tra-tan-cuong','trà tân cương',100000,'hoa-nhai.png'),
  P('tra-uop-hoa-sen','Trà Ướp Hoa Sen','tra-tan-cuong','trà tân cương',100000,'hoa-sen.png'),
  P('tra-uop-hoa','Trà Ướp Hoa','tra-tan-cuong','trà tân cương',100000,'hoa-khac.png'),

  P('dai-son-khe','Đại Sơn Khê','tra-trung-hoa','trà trung hoa',100000,'dai-son-khe.png'),
  P('hong-nu-nhi','Hồng Nữ Nhi','tra-trung-hoa','trà trung hoa',100000,'hong-nu-nhi.png'),
  P('hong-tam-giao','Hồng Tâm Giao','tra-trung-hoa','trà trung hoa',100000,'hong-tam-giao.png'),

  P('tra-atiso','Trà Atiso','tra-thao-duoc','trà thảo dược',100000,'atiso.png'),
  P('tra-thao-moc','Trà Thảo Mộc','tra-thao-duoc','trà thảo dược',100000,'thao-moc.png'),
  P('tra-gung','Trà Gừng','tra-thao-duoc','trà thảo dược',100000,'gung-tra.png'),

  P('banh-thap-cam','Bánh Thập Cẩm','banh','BÁNH',100000,'banh-thap-cam.png','snack'),
  P('banh-deo','Bánh Dẻo','banh','BÁNH',100000,'banh-deo.png','snack'),
  P('combo-banh','Combo Bánh','banh','BÁNH',100000,'combo-banh.png','snack'),

  P('mut-dua','Mứt Dừa','mut','mứt',100000,'mut-dua.png','snack'),
  P('mut-gung','Mứt Gừng','mut','mứt',100000,'mut-gung.png','snack'),
  P('mut-bi','Mứt Bí','mut','mứt',100000,'mut-bi.png','snack'),
  P('mut-sen','Mứt Sen','mut','mứt',100000,'mut-sen.png','snack'),
  P('mut-khoai-lang','Mứt Khoai Lang','mut','mứt',100000,'mut-khoai-lang.png','snack'),
  P('mut-me','Mứt Me','mut','mứt',100000,'mut-me.png','snack'),
  P('mut-quat','Mứt Quất','mut','mứt',100000,'mut-quat.png','snack'),
  P('mut-man','Mứt Mận','mut','mứt',100000,'mut-man.png','snack'),
  P('mut-vo-buoi','Mứt Vỏ Bưởi','mut','mứt',100000,'mut-vo-buoi.png','snack'),

  P('am-tu-sa','Ấm Tử Sa','am-tra','ấm trà',100000,'am-tu-sa.png','teaware',true),
  P('am-su','Ấm Sứ','am-tra','ấm trà',100000,'am-su.png','teaware',true),
  P('am-tetsubin','Ấm Tetsubin','am-tra','ấm trà',100000,'am-tetsubin.png','teaware',true),
  P('am-thuy-tinh','Ấm Thủy Tinh','am-tra','ấm trà',100000,'am-thuy-tinh.png','teaware',true),
  P('am-tong','Ấm Tống','am-tra','ấm trà',100000,'am-tong.png','teaware',true),
  P('am-men-ran','Ấm Men Rạn','am-tra','ấm trà',100000,'am-men-ran.png','teaware',true),
  P('am-gom-hoa','Ấm Gốm Hoa','am-tra','ấm trà',100000,'am-gom-hoa.png','teaware',true),
  P('am-bien-phuc','Ấm Biển Phúc','am-tra','ấm trà',100000,'am-bien-phuc.png','teaware',true),

  P('khay-tra-go','Khay Trà Gỗ','khay-tra','khay trà',65000,'khay-go.png','teaware'),
  P('khay-tra-tre','Khay Trà Tre','khay-tra','khay trà',65000,'khay-tre.png','teaware'),
  P('lot-chen-tra','Lót Chén Trà','khay-tra','khay trà',65000,'lot-chen.png','teaware'),
  P('quan-tra','Quản Trà','khay-tra','khay trà',65000,'quan-tra.png','teaware'),

  P('hoi-ngo','Hội Ngộ','com-po','cốm pô',100000,'hoi-ngo.png','combo'),
  P('doc-am','Độc Ẩm','com-po','cốm pô',100000,'doc-am.png','combo'),
  P('doi-am','Đối Ẩm','com-po','cốm pô',100000,'doi-am.png','combo'),

  P('dong-goi-tra-o-long','Trà Ô Long','dong-goi','đóng gói',100000,'dong-goi-oolong.png','packaging'),
  P('dong-goi-tra-son-khe','Trà Sơn Khê','dong-goi','đóng gói',100000,'dong-goi-son-khe.png','packaging'),
  P('dong-goi-hong-nu-nhi','Hồng Nữ Nhi','dong-goi','đóng gói',100000,'dong-goi-hong-nu-nhi.png','packaging'),
  P('dong-goi-hong-tam-giao','Hồng Tâm Giao','dong-goi','đóng gói',100000,'dong-goi-hong-tam-giao.png','packaging'),
];

export const menuGroups:{id:string;label:string;layout?:'teaware'|'tray'}[]=[
  {id:'tra-o-long',label:'trà ô long'},
  {id:'tra-tan-cuong',label:'trà tân cương'},
  {id:'tra-trung-hoa',label:'trà trung hoa'},
  {id:'tra-thao-duoc',label:'trà thảo dược'},
  {id:'banh',label:'BÁNH'},
  {id:'mut',label:'mứt'},
  {id:'am-tra',label:'ấm trà',layout:'teaware'},
  {id:'khay-tra',label:'khay trà',layout:'tray'},
  {id:'com-po',label:'cốm pô'},
  {id:'dong-goi',label:'đóng gói'},
];

export const categories=menuGroups.map(x=>x.label);
export const formatVnd=(value:number)=>new Intl.NumberFormat('vi-VN').format(value)+'Đ';
export const findProduct=(slug:string)=>products.find(p=>p.slug===slug);
