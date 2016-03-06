<?php

namespace iSterilization\Model;

/**
 * 
 * @Entity {"name":"usersmenu", "cache":"\\iSterilization\\Cache\\usersmenu", "event":"\\iSterilization\\Event\\usersmenu"}
 */
class usersmenu extends \Smart\Data\Model {

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
    private $modulemenuid;

    /**
     * @Policy {"nullable":false, "default":""}
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
     * @return \iSterilization\Model\usersmenu
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
     * @return \iSterilization\Model\usersmenu
     */
    public function setUsersid($usersid) {
        $this->usersid = $usersid;
        return $this;
    }

    /**
     * @return type integer
     */
    public function getModulemenuid() {
        return $this->modulemenuid;
    }

    /**
     * @param type $modulemenuid
     * @return \iSterilization\Model\usersmenu
     */
    public function setModulemenuid($modulemenuid) {
        $this->modulemenuid = $modulemenuid;
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
     * @return \iSterilization\Model\usersmenu
     */
    public function setExpireto($expireto) {
        $this->expireto = $expireto;
        return $this;
    }

}