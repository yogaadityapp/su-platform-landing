import { CourseCard } from "@/components/misc/CourseCard";

function AllCourse() {
  return (
    <div className="">
      <div className="container mt-[60px]">
        <span className="text-[#0F6AF5] w-[150px] font-normal ">
          SEMUA KELAS
        </span>
        <h3 className="font-semibold text-4xl w-[580px] py-2">
          Cari dan Temukan Kursus yang Kamu Butuhkan!
        </h3>
        <div className="flex gap-3 mt-2 mb-[50px]">
          <div className="form-control form-control_lg " 
                style={{width: "536px"}}>
            <div className="form-control__group ">
              <span data-input-icon="search" />
              <input
                type="email"
                className="form-control__input"
                placeholder="Belajar Siakad"
              />
              <span data-clear="input" />
            </div>
          </div>
          <button type="button" className="btn btn_primary btn_lg">
            Cari Sekarang
          </button>
        </div>
      </div>
      <div className="grid cols-6 lg:px-24">
        <aside className="col-1 h-fit sticky top-24">
          <div className="sidebar__group">
            <div className="sidebar__group-header mb-[10px]">
              <span className="sidebar__group-title">Kategori</span>
            </div>
            <div className="form-control">
              <ul className="sidebar__list">
                <li className="sidebar__item mb-2">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      className="form-control__checkbox"
                      id="check-5"
                      name="group"
                    />
                    <label className="form-control__label-checkbox">
                      Sevima Pay
                    </label>
                  </div>
                </li>
                <li className="sidebar__item mb-2">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      className="form-control__checkbox"
                      id="check-5"
                      name="group"
                    />
                    <label className="form-control__label-checkbox">
                      Edlink
                    </label>
                  </div>
                </li>
                <li className="sidebar__item mb-2">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      className="form-control__checkbox"
                      id="check-5"
                      name="group"
                    />
                    <label className="form-control__label-checkbox">
                      Karir Link
                    </label>
                  </div>
                </li>
                <li className="sidebar__item mb-2">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      className="form-control__checkbox"
                      id="check-5"
                      name="group"
                    />
                    <label className="form-control__label-checkbox">
                      GoFeeder
                    </label>
                  </div>
                </li>
                <li className="sidebar__item mb-2">
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      className="form-control__checkbox"
                      id="check-5"
                      name="group"
                    />
                    <label className="form-control__label-checkbox">
                      Mau Kuliah
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar__group">
            <div className="sidebar__group-header mb-[10px]">
              <span className="sidebar__group-title">Rentang Harga</span>
            </div>
            <ul className="sidebar__list">
              <li className="sidebar__item">
                <a className="sidebar__link" href="#">
                  <span className="sidebar__link-text">Sub Menu List 1</span>
                </a>
              </li>
              <li className="sidebar__item">
                <a className="sidebar__link" href="#">
                  <span className="sidebar__link-text">Sub Menu List 1</span>
                </a>
              </li>
              <li className="sidebar__item">
                <a className="sidebar__link" href="#">
                  <span className="sidebar__link-text">Sub Menu List 1</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="grid cols-3 col-5 w-full">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </div>
  );
}

export default AllCourse;
