const stateDefault = {
  arrSinhVien: [],
  sinhVien: {
    maSV: "",
    hoTen: "",
    sdt: "",
    email: "",
  },
  error: { maSV: "", hoTen: "", sdt: "", email: "" },
  arrSearch: [],
};
export const qlsvFormReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_THONG_TIN_INPUT": {
      let { id, value } = action.payload;
      state.sinhVien[id] = value;
      state.sinhVien = { ...state.sinhVien };
      return { ...state };
    }
    case "THEM_SINH_VIEN": {
      let { sinhVien } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate.push(sinhVien);
      state.arrSinhVien = arrSinhVienUpdate;
      state.arrSearch = arrSinhVienUpdate;
      return { ...state };
    }
    case "XOA_SINH_VIEN": {
      let { maSVClick } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate = arrSinhVienUpdate.filter(
        (sv) => sv.maSV != maSVClick
      );
      state.arrSinhVien = arrSinhVienUpdate;
      state.arrSearch = arrSinhVienUpdate;
      return { ...state };
    }
    case "VALIDATION": {
      let { errorMess } = action.payload;
      state.error = errorMess;
      state.error = { ...state.error };
      return { ...state };
    }
    case "SUA_SINH_VIEN": {
      let { sinhVienCapNhat } = action.payload;
      state.sinhVien = sinhVienCapNhat;
      state.sinhVien = { ...state.sinhVien };
      return { ...state };
    }
    case "CAP_NHAT_SINH_VIEN": {
      let { sinhVien } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      let sinhVienUpdate = arrSinhVienUpdate.find(
        (sv) => sv.maSV === sinhVien.maSV
      );
      if (sinhVienUpdate) {
        for (let key in sinhVienUpdate) {
          sinhVienUpdate[key] = sinhVien[key];
        }
      }
      state.arrSinhVien = arrSinhVienUpdate;
      state.arrSearch = arrSinhVienUpdate;
      return { ...state };
    }
    case "TIM_KIEM_SINH_VIEN": {
      let { keyword } = action.payload;
      let arrSinhVienUpdate = [...state.arrSinhVien];
      if (keyword === "") {
        state.arrSinhVien = state.arrSearch;
      } else {
        arrSinhVienUpdate = arrSinhVienUpdate.filter((sp) =>
          sp.hoTen.toLowerCase().includes(keyword.toLowerCase())
        );
        state.arrSinhVien = arrSinhVienUpdate;
        console.log(arrSinhVienUpdate);
      }
      return { ...state };
    }

    default:
      return state;
  }
};
