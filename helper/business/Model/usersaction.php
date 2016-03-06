<?php

namespace iSterilization\Model;

/**
 * 
 * @Entity {"name":"usersaction", "cache":"\\iSterilization\\Cache\\usersaction", "event":"\\iSterilization\\Event\\usersaction"}
 */
class usersaction extends \Smart\Data\Model {

    /**
     * @Policy {"nullable":false}
     * @Column {"description":"", "strategy":"AUTO", "type":"integer", "policy":true}
     */
    private $id;

    /**
     * @Policy {"nullable":false, "default":""}
     * @Column {"description":"", "type":"integer", "policy":true}
     */
    private $usersid;

    /**
     * @Policy {"nullable":false, "default":""}
     * @Column {"description":"", "type":"integer", "policy":true}
     */
    private $menuactionid;

    /**
     * @Policy {"nullable":true, "default":""}
     * @Column {"description":"", "type":"date", "policy":true}
     */
    private $expireto;

    /**
     * @return type integer
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @param type $id
     * @return \iSterilization\Model\usersaction
     */
    public function setId($id) {
        $this->id = $id;
        return $this;
    }

    /**
     * @return type integer
     */
    public function getUsersid() {
        return $this->usersid;
    }

    /**
     * @param type $usersid
     * @return \iSterilization\Model\usersaction
     */
    public function setUsersid($usersid) {
        $this->usersid = $usersid;
        return $this;
    }

    /**
     * @return type integer
     */
    public function getMenuactionid() {
        return $this->menuactionid;
    }

    /**
     * @param type $menuactionid
     * @return \iSterilization\Model\usersaction
     */
    public function setMenuactionid($menuactionid) {
        $this->menuactionid = $menuactionid;
        return $this;
    }

    /**
     * @return type date
     */
    public function getExpireto() {
        return $this->expireto;
    }

    /**
     * @param type $expireto
     * @return \iSterilization\Model\usersaction
     */
    public function setExpireto($expireto) {
        $this->expireto = $expireto;
        return $this;
    }

}