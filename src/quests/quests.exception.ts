import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class QuestsException {
  notFoundQuest() {
    throw new NotFoundException({
      ok: false,
      message: '요청하신 퀘스트를 찾을 수 없습니다.',
    });
  }

  notFoundPlayer() {
    return new NotFoundException({
      ok: false,
      message: '플레이어님의 정보를 찾을 수 없습니다.',
    });
  }

  alreadyCompleted() {
    throw new ConflictException({
      ok: false,
      message: '퀘스트를 이미 완료하였습니다.',
    });
  }

  serverErrorOnComplete() {
    throw new InternalServerErrorException({
      ok: false,
      message: '퀘스트를 완료할 수 없습니다.',
    });
  }

  serverErrorOnQuest() {
    throw new InternalServerErrorException({
      ok: false,
      message: '퀘스트를 조회할 수 없습니다.',
    });
  }
}
