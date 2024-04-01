<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>- PHOTO GALLERY </h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          PHOTO GALLERY 는 다양한 전 세계의 사람들이 자기 자신이 찍거나 소장한 사진을 올려 판매하는 사이트 입니다. <br>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>- PHOTO GALLERY 관리자 정보</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-img src="@/assets/자신.jpg" height="200px" width="200px"></v-img>
          <span><br>이름 : 김태수<br> 소속 : 목원대학교 정보통신공학과<br></span>
          <br>
          <v-btn href="mailto:xotn0821@naver.com" target="_blank" text>
            <v-icon>mdi-open-in-new</v-icon>
            <span class="mr-3">관리자에게 메일 보내기</span>

          </v-btn>
          <br>
          <v-btn href="https://www.instagram.com/k_t_xoo/" target="_blank" text>
            <v-icon>mdi-open-in-new</v-icon>
            <span class="mr-3">관리자 SNS</span>

          </v-btn>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>- PHOTO GALLERY 요청 게시판 </h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          - 요청 사진 안내글은 등록일 기준으로 7일뒤에 지워집니다. 하지만 사진과 정보는 계속 유지됩니다. <br><br>
          <hr><br>
          * 요청 사진 등록 안내 * <br><br>
          - 사진번호: 6<br>
          - 사진이름: 뉴욕야경<br>
          - 사진가격: 4000원<br>
          - 사진내용: 김태숭 회원님의 요청 사진입니다.<br><br>
          * 위와 같은 정보로 사진이 게시되었습니다.<br><br>
          <hr>

        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>- PHOTO GALLERY 회원가입 방법</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <br>
          1. 오른쪽 상단 JOIN 버튼 클릭
          <br><br>
          2. 이름, 생년월일, 아이디, 비밀번호 입력 후 회원가입하기 클릭
          <br><br>
          3. 회원가입이 성공적으로 완료되었습니다. 문구가 나오면 정상적으로 가입이 완료되어 로그인이 가능합니다.
          <br><br>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>- PHOTO GALLERY 로그인 방법</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <br>
          1. 오른쪽 상단 LOGIN 버튼 클릭
          <br><br>
          2. 아이디, 비밀번호 입력 후 LOGIN 클릭
          <br><br>
          3. OOO님 환영합니다. 문구가 나오면 정상적으로 로그인이 되었습니다.
          <br><br>
        </v-expansion-panel-content>
      </v-expansion-panel>



      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>- PHOTO GALLERY 사진등록 방법</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <br>
          1. 오른쪽 상단 MENU 버튼 클릭
          <br><br>
          2. Photo management 버튼 클릭
          <br><br>
          3. 왼쪽 상단 사진 추가 버튼 클릭
          <br><br>
          4. 사진 번호, 가격, 이름, 정보, 이미지 주소 작성 후 확인 클릭
          <br><br>
          5. 사진이 추가되었습니다. 문구가 나오면 정상적으로 저장되었습니다.
          <br><br>
          * 추가로 Photomanagement를 통하여 저장된 사진을 수정 및 삭제가 가능합니다.
        </v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>- PHOTO GALLERY 사진구매 방법</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          1. 메인 홈페이지에 나와있는 사진의 아래 부분의 구매하기 버튼 클릭
          <br><br>
          2. 나오는 팝업창의 내용을 잘 읽고 결제하기 버튼 클릭
          <br><br>
          3. 결제 진행 후 결제 완료 버튼 클릭
          <br><br>
          4. 오른쪽 상단의 MENU버튼 클릭
          <br><br>
          5. Buy List를 통하여 구매한 사진 정보 등 확인 할 수 있습니다.
          <br><br>
        </v-expansion-panel-content>
      </v-expansion-panel>


      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>- PHOTO GALLERY 사진요청 방법</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          1. MENU 버튼 클릭
          <br><br>
          2. Important Notice 클릭
          <br><br>
          3. 상단에 관리자 정보 클릭
          <br><br>
          4. 관리자 정보에 나와있는 SNS 혹은 메일을 통하여 관리자에게 사진 요청
          <br><br>
          관리자가 요청을 받아 등록 후 사진 번호와 사진 정보등을 Important Notice의 상단에 "PHOTO GALLERY 요청 게시판" 게시글을 통해 공지합니다.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <h4>- PHOTO GALLERY UpDate</h4>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          1. 사진 내용 혹은 번호 이름으로 검색 기능
          <br><br>
        </v-expansion-panel-content>
      </v-expansion-panel>


    </v-expansion-panels>
  </div>
</template>
<script>
export default {

}
</script>
