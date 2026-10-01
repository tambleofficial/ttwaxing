const menu = document.querySelector('.mobile-menu');
const links = document.querySelector('.mobile-links');

if (menu && links) {
  const closeMenu = () => {
    links.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', '모바일 메뉴 열기');
  };

  menu.addEventListener('click', () => {
    const willOpen = !links.classList.contains('open');
    links.classList.toggle('open', willOpen);
    menu.setAttribute('aria-expanded', String(willOpen));
    menu.setAttribute('aria-label', willOpen ? '모바일 메뉴 닫기' : '모바일 메뉴 열기');
  });

  links.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}


const inquiryForm = document.querySelector('#inquiry-form');
const copyInquiry = document.querySelector('#copy-inquiry');
const formStatus = document.querySelector('#form-status');

function buildInquiryMessage() {
  if (!inquiryForm) return '';
  const data = new FormData(inquiryForm);
  return `[티티왁싱 예약 문의]\n관리: ${data.get('service') || ''}\n성별: ${data.get('gender') || ''}\n방문: ${data.get('first') || ''}\n희망 일정: ${data.get('date') || '미정'}\n문의: ${data.get('memo') || '없음'}`;
}

async function copyMessage() {
  const message = buildInquiryMessage();
  try {
    await navigator.clipboard.writeText(message);
    if (formStatus) formStatus.textContent = '문의 내용을 복사했습니다.';
  } catch (error) {
    if (formStatus) formStatus.textContent = '복사가 지원되지 않는 브라우저입니다. 내용을 직접 선택해 복사해 주세요.';
  }
}

if (copyInquiry) copyInquiry.addEventListener('click', copyMessage);
if (inquiryForm) inquiryForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = buildInquiryMessage();
  if (navigator.share) {
    try {
      await navigator.share({ title: '티티왁싱 예약 문의', text: message });
      if (formStatus) formStatus.textContent = '공유 화면을 열었습니다.';
      return;
    } catch (error) {
      if (error && error.name === 'AbortError') return;
    }
  }
  await copyMessage();
  if (formStatus) formStatus.textContent = '공유 기능 대신 문의 내용을 복사했습니다.';
});
