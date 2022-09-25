
Feature: Бронирование билетов
    Scenario: Успешное бронирование одного билета
        Given Пользователь находится на странице 'http://qamid.tmweb.ru/client/index.php'
        When Пользователь бронирует 1 место в зале
        Then Пользователь получил qr-code

    Scenario: Успешное бронирование двух билетов в кино
        Given Пользователь находится на странице 'http://qamid.tmweb.ru/client/index.php'
        When Пользователь бронирует 2 места в зале
        Then Пользователь получил qr-code

    Scenario: Негативная проверка бронирования билета в кино
        Given Пользователь находится на странице 'http://qamid.tmweb.ru/client/index.php'
        When Пользователь бронирует 1 место в зале дважды
        Then Пользователь не может забронировать уже забронированное место